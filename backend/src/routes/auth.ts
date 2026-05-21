import { Router } from "express";
import { z } from "zod";
import crypto from "node:crypto";
import { db } from "../db/index.js";
import { groups, invites, memberships, users } from "../db/schema.js";
import { eq } from "drizzle-orm";
import { hashPassword, verifyPassword } from "../utils/password.js";
import { signToken } from "../utils/jwt.js";

const router = Router();

const registerAdminSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
  displayName: z.string().min(2),
  groupName: z.string().min(2).optional()
});

const registerIndividualSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
  displayName: z.string().min(2)
});

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
  groupId: z.string().optional()
});

const acceptInviteSchema = z.object({
  token: z.string().min(12),
  password: z.string().min(8),
  displayName: z.string().min(2)
});

router.post("/register-admin", async (req, res) => {
  const parse = registerAdminSchema.safeParse(req.body);
  if (!parse.success) {
    return res.status(400).json({ error: "Invalid payload", details: parse.error.flatten() });
  }

  const { email, password, displayName, groupName } = parse.data;
  const existing = db.select().from(users).where(eq(users.email, email)).get();
  if (existing) {
    return res.status(409).json({ error: "Email already registered" });
  }

  const passwordHash = await hashPassword(password);
  const groupId = crypto.randomUUID();
  const userId = crypto.randomUUID();

  db.transaction((tx) => {
    tx.insert(groups)
      .values({
        id: groupId,
        name: groupName ?? "Default Group"
      })
      .run();

    tx.insert(users)
      .values({
        id: userId,
        email,
        passwordHash,
        displayName,
        mode: "group"
      })
      .run();

    tx.insert(memberships)
      .values({
        userId,
        groupId,
        role: "admin"
      })
      .run();
  });

  const token = signToken({
    sub: userId,
    email,
    mode: "group",
    groupId,
    role: "admin"
  });

  return res.status(201).json({
    token,
    user: { id: userId, email, displayName, mode: "group" },
    group: { id: groupId, name: groupName ?? "Default Group" }
  });
});

router.post("/register-individual", async (req, res) => {
  const parse = registerIndividualSchema.safeParse(req.body);
  if (!parse.success) {
    return res.status(400).json({ error: "Invalid payload", details: parse.error.flatten() });
  }

  const { email, password, displayName } = parse.data;
  const existing = db.select().from(users).where(eq(users.email, email)).get();
  if (existing) {
    return res.status(409).json({ error: "Email already registered" });
  }

  const passwordHash = await hashPassword(password);
  const userId = crypto.randomUUID();

  db.insert(users)
    .values({
      id: userId,
      email,
      passwordHash,
      displayName,
      mode: "individual"
    })
    .run();

  const token = signToken({
    sub: userId,
    email,
    mode: "individual"
  });

  return res.status(201).json({
    token,
    user: { id: userId, email, displayName, mode: "individual" }
  });
});

router.post("/login", async (req, res) => {
  const parse = loginSchema.safeParse(req.body);
  if (!parse.success) {
    return res.status(400).json({ error: "Invalid payload", details: parse.error.flatten() });
  }

  const { email, password, groupId } = parse.data;
  const user = db.select().from(users).where(eq(users.email, email)).get();
  if (!user) {
    return res.status(401).json({ error: "Invalid credentials" });
  }
  if (user.isSuspended || !user.isActive) {
    return res.status(403).json({ error: "User is suspended" });
  }

  const valid = await verifyPassword(password, user.passwordHash);
  if (!valid) {
    return res.status(401).json({ error: "Invalid credentials" });
  }

  if (user.mode === "individual") {
    const token = signToken({
      sub: user.id,
      email: user.email,
      mode: "individual"
    });
    return res.json({ token, user: { id: user.id, email: user.email, displayName: user.displayName } });
  }

  const membershipRows = db
    .select()
    .from(memberships)
    .where(eq(memberships.userId, user.id))
    .all();

  if (membershipRows.length === 0) {
    return res.status(403).json({ error: "No group membership" });
  }

  let targetMembership = membershipRows.find((m) => m.groupId === groupId);
  if (!targetMembership && membershipRows.length === 1) {
    targetMembership = membershipRows[0];
  }

  if (!targetMembership) {
    return res.status(400).json({ error: "Group selection required" });
  }

  const token = signToken({
    sub: user.id,
    email: user.email,
    mode: "group",
    groupId: targetMembership.groupId,
    role: targetMembership.role as "admin" | "moderator" | "participant"
  });

  return res.json({
    token,
    user: { id: user.id, email: user.email, displayName: user.displayName },
    groupId: targetMembership.groupId,
    role: targetMembership.role
  });
});

router.post("/accept-invite", async (req, res) => {
  const parse = acceptInviteSchema.safeParse(req.body);
  if (!parse.success) {
    return res.status(400).json({ error: "Invalid payload", details: parse.error.flatten() });
  }

  const { token, password, displayName } = parse.data;
  const invite = db.select().from(invites).where(eq(invites.token, token)).get();
  if (!invite) {
    return res.status(404).json({ error: "Invite not found" });
  }
  if (invite.acceptedAt) {
    return res.status(409).json({ error: "Invite already used" });
  }
  if (invite.expiresAt < Math.floor(Date.now() / 1000)) {
    return res.status(410).json({ error: "Invite expired" });
  }

  let user = db.select().from(users).where(eq(users.email, invite.email)).get();
  if (user && user.mode === "individual") {
    return res.status(409).json({ error: "Individual users cannot join groups" });
  }

  let userId = user?.id;
  if (!user) {
    const passwordHash = await hashPassword(password);
    userId = crypto.randomUUID();
    db.insert(users)
      .values({
        id: userId,
        email: invite.email,
        passwordHash,
        displayName,
        mode: "group"
      })
      .run();
  }

  const existingMembership = db
    .select()
    .from(memberships)
    .where(eq(memberships.userId, userId!))
    .all()
    .find((m) => m.groupId === invite.groupId);

  if (!existingMembership) {
    db.insert(memberships)
      .values({
        userId: userId!,
        groupId: invite.groupId,
        role: invite.role
      })
      .run();
  }

  db.update(invites)
    .set({ acceptedAt: Math.floor(Date.now() / 1000) })
    .where(eq(invites.id, invite.id))
    .run();

  const authToken = signToken({
    sub: userId!,
    email: invite.email,
    mode: "group",
    groupId: invite.groupId,
    role: invite.role as "admin" | "moderator" | "participant"
  });

  return res.json({
    token: authToken,
    user: { id: userId, email: invite.email, displayName },
    groupId: invite.groupId,
    role: invite.role
  });
});

export default router;
