import type { Request, Response, NextFunction } from "express";

export const requireGroupAccess = (req: Request, res: Response, next: NextFunction) => {
  if (!req.user?.groupId) {
    return res.status(403).json({ error: "Group context required" });
  }
  if (req.params.groupId && req.user.groupId !== req.params.groupId) {
    return res.status(403).json({ error: "Token not valid for this group" });
  }
  return next();
};

export const requireRole = (roles: Array<"admin" | "moderator" | "participant">) => {
  return (req: Request, res: Response, next: NextFunction) => {
    if (!req.user?.role || !roles.includes(req.user.role)) {
      return res.status(403).json({ error: "Insufficient role" });
    }
    return next();
  };
};
