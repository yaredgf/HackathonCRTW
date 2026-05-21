import jwt from "jsonwebtoken";

const jwtSecret = process.env.JWT_SECRET ?? "change-me";
const jwtExpiresIn = (process.env.JWT_EXPIRES_IN ?? "7d") as jwt.SignOptions["expiresIn"];

export interface JwtPayload {
  sub: string;
  email: string;
  mode: "group" | "individual";
  groupId?: string;
  role?: "admin" | "moderator" | "participant";
}

export const signToken = (payload: JwtPayload) =>
  jwt.sign(payload, jwtSecret, { expiresIn: jwtExpiresIn });

export const verifyToken = (token: string) =>
  jwt.verify(token, jwtSecret) as JwtPayload;
