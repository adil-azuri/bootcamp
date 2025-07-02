import { Request, Response, NextFunction } from "express";

export const errorHandler = (err: any, req: Request, res: Response, next: NextFunction) => {
    console.log(err);
    const message = err.message || "Internal Server Error"
    res.status(500).json({ message })
}