import jwt from "jsonwebtoken";
const jwtSecret = process.env.JWT_SECRET ?? "change-me";
const jwtExpiresIn = (process.env.JWT_EXPIRES_IN ?? "7d");
export const signToken = (payload) => jwt.sign(payload, jwtSecret, { expiresIn: jwtExpiresIn });
export const verifyToken = (token) => jwt.verify(token, jwtSecret);
