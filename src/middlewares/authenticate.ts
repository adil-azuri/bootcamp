// src/middleware/auth.middleware.ts
import { Request, Response, NextFunction } from "express";
import { verify_token_Supplyer, verifyToken } from "../utility/jwt";

export function authenticate(req: Request, res: Response, next: NextFunction) {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) {
        res.status(401).json({ message: "Unauthorized" });
        return;
    }

    try {
        const decoded = verifyToken(token);
        (req as any).user = decoded as any;
        console.log((req as any).user);

        next();
    } catch {
        res.status(401).json({ message: "Invalid token" });
        return;
    }
}

export function authproduct(req: Request, res: Response, next: NextFunction) {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) {
        res.status(401).json({ message: "Unauthorized" });
        return;
    }

    try {
        const decoded = verify_token_Supplyer(token);
        (req as any).supplier = decoded as any;
        // console.log((req as any).supplier);

        next();
    } catch {
        res.status(401).json({ message: "Invalid token" });
        return;
    }
}