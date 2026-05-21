import { verifyToken } from "../utils/jwt.js";
export const requireAuth = (req, res, next) => {
    const header = req.headers.authorization;
    if (!header || !header.startsWith("Bearer ")) {
        return res.status(401).json({ error: "Missing bearer token" });
    }
    try {
        const token = header.slice("Bearer ".length);
        const payload = verifyToken(token);
        req.user = {
            userId: payload.sub,
            email: payload.email,
            mode: payload.mode,
            groupId: payload.groupId,
            role: payload.role
        };
        return next();
    }
    catch (error) {
        return res.status(401).json({ error: "Invalid or expired token" });
    }
};
