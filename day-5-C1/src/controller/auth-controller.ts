// src/controllers/auth.controller.ts
import { Request, Response } from "express";
import { login, register, servUpdate } from "../serv_log_signin/service";
import { joiLogin, joiRegister, joiUpdatePass } from "../validation/validation";
import { prisma } from "../prisma/client";

export async function handleRegister(req: Request, res: Response) {
  try {
    const { error } = joiRegister.validate(req.body);
    if (error) {
      res.status(400).json({ message: error.message });
      return;
    }

    const { email, password, role } = req.body;
    const user = await register(email, password, role);
    res.status(201).json({ message: "User registered", user });
  } catch (err: any) {
    res.status(400).json({ message: err.message });
  }
}


export async function handleLogin(req: Request, res: Response) {
  try {
    const { error } = joiLogin.validate(req.body);
    if (error) {
      res.status(400).json({ message: error.message });
      return;
    }

    const { email, password } = req.body;

    const result = await login(email, password);
    res.json({ message: "Login success", ...result });
  } catch (err: any) {
    res.status(401).json({ message: err.message });
  }
}

export async function updatePassword(req: Request, res: Response) {
  try {
    const { error } = joiRegister.validate(req.body);
    if (error) {
      res.status(400).json({ message: error.message });
      return;
    }

    const { email, password } = req.body;
    const pass = await servUpdate(email, password);
    res.status(201).json({ message: "Password Updated", pass });
  } catch (err: any) {
    res.status(400).json({ message: err.message });
  }
}