import "express";

declare module "express-serve-static-core" {
  interface Request {
    user?: {
      userId: string;
      email: string;
      mode: "group" | "individual";
      groupId?: string;
      role?: "admin" | "moderator" | "participant";
    };
  }
}
