// src/services/auth.service.ts
import bcrypt from "bcrypt";
import { prisma } from "../prisma/client";
import { sign_token_Supplyer } from "../utility/jwt";

export async function service_reg_supplier(name: string, password: string, role: string) {
    if (password.length < 6) {
        throw new Error("Invalid password, Password Must be up to 6 Character");
    }
    if (!name) {
        throw new Error("Please input Name");
    }
    if (!role) {
        throw new Error("Please input Role");
    }

    const hashed = await bcrypt.hash(password, 10);

    const supplier = await prisma.supplier.create({
        data: { name, password: hashed, role },
    });

    return { id: supplier.id, name: supplier.name, role: supplier.role };
}

export async function service_log_supplier(name: string, password: string) {
    const supplier = await prisma.supplier.findUnique({ where: { name } });

    if (!supplier) throw new Error("Supplier not found");

    const isMatch = await bcrypt.compare(password, supplier.password);
    if (!isMatch) throw new Error("Wrong password");

    const token = sign_token_Supplyer({ name: supplier.name, role: supplier.role });
    return { role: supplier.role, token };
}

export async function service_create_products(name: string, supplierid: number, picture: string) {
    if (!name && !supplierid) {
        throw new Error("Add name produt and supplierid");
    }

    const product = await prisma.products.create({
        data: { name, supplierid, picture },
    });

    return { id: product.id, name: product.name, supplier: product.supplierId };
}