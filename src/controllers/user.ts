// src/controllers/auth.controller.ts
import { Request, Response } from "express";
import { registerUser, loginUser, serviceUpdate } from "../services/user";
import { loginSchema, registerSchema, uploadSchema } from "../validation/user";

export async function handleRegister(req: Request, res: Response) {
    try {
        const { error } = registerSchema.validate(req.body);
        if (error) {
            res.status(400).json({ message: error.message });
            return;
        }

        if (!req.file) {
            res.status(400).json({ message: "no file Upload" });
            return;
        }

        const profile = req.file.filename
        const { email, password } = req.body;

        const user = await registerUser(email, password, profile);
        res.status(201).json({ message: "User registered", user });
    } catch (err: any) {
        res.status(400).json({ message: err.message });
    }
}

export async function handleLogin(req: Request, res: Response) {
    try {
        const { error } = loginSchema.validate(req.body);
        if (error) {
            res.status(400).json({ message: error.message });
            return;
        }

        const { email, password } = req.body;

        const result = await loginUser(email, password);
        res.json({ message: "Login success", ...result });
    } catch (err: any) {
        res.status(401).json({ message: err.message });
    }
}

export async function updateProfile(req: Request, res: Response) {
    try {
        const { error } = uploadSchema.validate(req.body);
        if (error) {
            res.status(400).json({ message: error.message });
            return;
        }

        if (!req.file) {
            res.status(400).json({ message: "no file Upload" });
            return;
        }

        const profile = req.file.filename
        const email = req.body;

        const update = await serviceUpdate(email, profile);
        res.status(201).json({ message: "Profile Updated", update });
    } catch (err: any) {
        res.status(400).json({ message: err.message });
    }
}
