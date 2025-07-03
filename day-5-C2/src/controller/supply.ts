// src/controllers/auth.controller.ts
import { Request, Response } from "express";
import { login, register } from "../service/service";
import { joiLogin, joiRegister } from "../validation/validation";
import { prisma } from "../prisma/client";

export async function registerSupply(req: Request, res: Response) {
  try {
    const { error } = joiRegister.validate(req.body);
    if (error) {
      res.status(400).json({ message: error.message });
      return;
    }

    const { name, password, role } = req.body;
    const supply = await register(name, password, role);
    res.status(201).json({ message: "Supply registered", supply });
  } catch (err: any) {
    res.status(400).json({ message: err.message });
  }
}


export async function loginSupply(req: Request, res: Response) {
  try {
    const { error } = joiLogin.validate(req.body);
    if (error) {
      res.status(400).json({ message: error.message });
      return;
    }

    const { name, password, role } = req.body;
    const result = await login(name, password, role);

    res.json({ message: "Login success", ...result });
  } catch (err: any) {
    res.status(401).json({ message: err.message });
  }
}

export async function getProduct(req: Request, res: Response) {
  res.json({ message: "This  products route" });

}

export async function insertProduct(req: Request, res: Response) {
  try {
    const { error } = joiRegister.validate(req.body);
    if (error) {
      res.status(400).json({ message: error.message });
      return;
    }

    const { name, password, role } = req.body;
    const supply = await register(name, password, role);
    res.status(201).json({ message: "Supply registered", supply });
  } catch (err: any) {
    res.status(400).json({ message: err.message });
  }

}
