export const requireGroupAccess = (req, res, next) => {
    if (!req.user?.groupId) {
        return res.status(403).json({ error: "Group context required" });
    }
    if (req.params.groupId && req.user.groupId !== req.params.groupId) {
        return res.status(403).json({ error: "Token not valid for this group" });
    }
    return next();
};
export const requireRole = (roles) => {
    return (req, res, next) => {
        if (!req.user?.role || !roles.includes(req.user.role)) {
            return res.status(403).json({ error: "Insufficient role" });
        }
        return next();
    };
};
