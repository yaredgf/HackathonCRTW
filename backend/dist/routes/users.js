import { Router } from "express";
import { z } from "zod";
import crypto from "node:crypto";
import { db } from "../db/index.js";
import { groups, invites, memberships, users } from "../db/schema.js";
import { and, eq } from "drizzle-orm";
import { requireAuth } from "../middleware/auth.js";
import { requireGroupAccess, requireRole } from "../middleware/roles.js";
import { hashPassword } from "../utils/password.js";
const router = Router();
const createUserSchema = z.object({
    email: z.string().email(),
    password: z.string().min(8),
    displayName: z.string().min(2),
    role: z.enum(["admin", "moderator", "participant"]).optional()
});
const updateUserSchema = z.object({
    displayName: z.string().min(2).optional(),
    role: z.enum(["admin", "moderator", "participant"]).optional()
});
const inviteSchema = z.object({
    email: z.string().email(),
    role: z.enum(["admin", "moderator", "participant"]).optional(),
    expiresInHours: z.number().min(1).max(168).optional()
});
router.get("/groups/:groupId/users", requireAuth, requireGroupAccess, requireRole(["admin", "moderator"]), (req, res) => {
    const groupId = req.params.groupId;
    const rows = db
        .select({
        userId: users.id,
        email: users.email,
        displayName: users.displayName,
        isSuspended: users.isSuspended,
        role: memberships.role
    })
        .from(memberships)
        .innerJoin(users, eq(memberships.userId, users.id))
        .where(eq(memberships.groupId, groupId))
        .all();
    return res.json({ users: rows });
});
router.post("/groups/:groupId/users", requireAuth, requireGroupAccess, requireRole(["admin"]), async (req, res) => {
    const parse = createUserSchema.safeParse(req.body);
    if (!parse.success) {
        return res.status(400).json({ error: "Invalid payload", details: parse.error.flatten() });
    }
    const { email, password, displayName, role } = parse.data;
    const groupId = req.params.groupId;
    const group = db.select().from(groups).where(eq(groups.id, groupId)).get();
    if (!group || group.isArchived) {
        return res.status(404).json({ error: "Group not found" });
    }
    const existing = db.select().from(users).where(eq(users.email, email)).get();
    if (existing && existing.mode === "individual") {
        return res.status(409).json({ error: "Individual users cannot join groups" });
    }
    const userId = existing?.id ?? crypto.randomUUID();
    const alreadyMember = db
        .select()
        .from(memberships)
        .where(and(eq(memberships.userId, userId), eq(memberships.groupId, groupId)))
        .get();
    if (alreadyMember) {
        return res.status(409).json({ error: "User already in group" });
    }
    if (!existing) {
        const passwordHash = await hashPassword(password);
        db.insert(users)
            .values({
            id: userId,
            email,
            passwordHash,
            displayName,
            mode: "group"
        })
            .run();
    }
    db.insert(memberships)
        .values({
        userId,
        groupId,
        role: role ?? "participant"
    })
        .run();
    return res.status(201).json({ userId, groupId, role: role ?? "participant" });
});
router.get("/groups/:groupId/users/:userId", requireAuth, requireGroupAccess, requireRole(["admin", "moderator"]), (req, res) => {
    const { groupId, userId } = req.params;
    const row = db
        .select({
        userId: users.id,
        email: users.email,
        displayName: users.displayName,
        isSuspended: users.isSuspended,
        role: memberships.role
    })
        .from(memberships)
        .innerJoin(users, eq(memberships.userId, users.id))
        .where(and(eq(memberships.groupId, groupId), eq(memberships.userId, userId)))
        .get();
    if (!row) {
        return res.status(404).json({ error: "User not found in group" });
    }
    return res.json(row);
});
router.patch("/groups/:groupId/users/:userId", requireAuth, requireGroupAccess, requireRole(["admin"]), (req, res) => {
    const parse = updateUserSchema.safeParse(req.body);
    if (!parse.success) {
        return res.status(400).json({ error: "Invalid payload", details: parse.error.flatten() });
    }
    const { groupId, userId } = req.params;
    const { displayName, role } = parse.data;
    const membership = db
        .select()
        .from(memberships)
        .where(and(eq(memberships.userId, userId), eq(memberships.groupId, groupId)))
        .get();
    if (!membership) {
        return res.status(404).json({ error: "User not found in group" });
    }
    if (displayName) {
        db.update(users).set({ displayName }).where(eq(users.id, userId)).run();
    }
    if (role) {
        db.update(memberships)
            .set({ role })
            .where(and(eq(memberships.userId, userId), eq(memberships.groupId, groupId)))
            .run();
    }
    return res.json({ userId, groupId, role: role ?? membership.role, displayName });
});
router.patch("/groups/:groupId/users/:userId/suspend", requireAuth, requireGroupAccess, requireRole(["admin", "moderator"]), (req, res) => {
    const { groupId, userId } = req.params;
    const membership = db
        .select()
        .from(memberships)
        .where(and(eq(memberships.userId, userId), eq(memberships.groupId, groupId)))
        .get();
    if (!membership) {
        return res.status(404).json({ error: "User not found in group" });
    }
    db.update(users).set({ isSuspended: true }).where(eq(users.id, userId)).run();
    return res.json({ userId, suspended: true });
});
router.delete("/groups/:groupId/users/:userId", requireAuth, requireGroupAccess, requireRole(["admin", "moderator"]), (req, res) => {
    const { groupId, userId } = req.params;
    const membership = db
        .select()
        .from(memberships)
        .where(and(eq(memberships.userId, userId), eq(memberships.groupId, groupId)))
        .get();
    if (!membership) {
        return res.status(404).json({ error: "User not found in group" });
    }
    db.delete(memberships)
        .where(and(eq(memberships.userId, userId), eq(memberships.groupId, groupId)))
        .run();
    return res.status(204).send();
});
router.post("/groups/:groupId/invites", requireAuth, requireGroupAccess, requireRole(["admin"]), (req, res) => {
    const parse = inviteSchema.safeParse(req.body);
    if (!parse.success) {
        return res.status(400).json({ error: "Invalid payload", details: parse.error.flatten() });
    }
    const { email, role, expiresInHours } = parse.data;
    const groupId = req.params.groupId;
    const token = crypto.randomBytes(24).toString("hex");
    const expiresAt = new Date(Date.now() + (expiresInHours ?? 72) * 3600 * 1000);
    db.insert(invites)
        .values({
        groupId,
        email,
        role: role ?? "participant",
        token,
        expiresAt,
        createdByUserId: req.user.userId
    })
        .run();
    return res.status(201).json({ token, expiresAt });
});
export default router;
