// src/controllers/auth.controller.ts
import { Request, Response } from "express";
import { add_product, log_Schema_supplier, vali_register_supplier } from "../validation/supplier";
import { service_log_supplier, service_reg_supplier, service_create_products } from "../services/supplier";

export async function supplierRegister(req: Request, res: Response) {
    try {
        const { error } = vali_register_supplier.validate(req.body);

        if (error) {
            res.status(400).json({ message: error.message });
            return;
        }
        const { name, password, role } = req.body;


        const supplier = await service_reg_supplier(name, password, role);
        res.status(201).json({ message: "User registered", supplier });
    } catch (err: any) {
        res.status(400).json({ message: err.message });
    }
}

export async function SupplierLogin(req: Request, res: Response) {
    try {
        const { error } = log_Schema_supplier.validate(req.body);
        if (error) {
            res.status(400).json({ message: error.message });
            return;
        }

        const { name, password } = req.body;

        const result = await service_log_supplier(name, password);
        res.json({ message: "Login success", ...result });
    } catch (err: any) {
        res.status(401).json({ message: err.message });
    }
}


export async function uploadProducts(req: Request, res: Response) {
    try {
        const { error } = add_product.validate(req.body);
        if (error) {
            res.status(400).json({ message: error.message });
            return;
        }

        if (!req.file) {
            res.status(400).json({ message: "no file Upload" });
            return;
        }

        const pic_product = req.file.filename
        const { name, supplierid } = req.body;

        const user = await service_create_products(name, supplierid, pic_product);
        res.status(201).json({ message: "User registered", user });
    } catch (err: any) {
        res.status(400).json({ message: err.message });
    }
}

