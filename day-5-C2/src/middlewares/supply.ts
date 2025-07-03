import { Request, Response, NextFunction } from "express";
import { verifyToken } from "../utils/jwt";



export function authenticate(req: Request, res: Response, next: NextFunction) {
    //dapatkan dari req.header
    const token = req.headers.authorization?.split(" ")[1];

    if (!token) {
        res.status(401).json({ message: "Unauthorized" });
        return;
    }

    try {
        const decode = verifyToken(token);
        (req as any).supplier = decode as any;
        next();

    } catch {
        res.status(401).json({ message: "Invalid token" });
        return;
    }
}