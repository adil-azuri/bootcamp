import bcrypt from "bcrypt";
import { prisma } from "../prisma/client";
import { getToken } from "../utils/jwt";

export async function register(name: string, password: string, role: string) {
    if (!role.match("supplier") || password.length < 6) {
        throw new Error("Invalid input name or password");
    }
    const hash = await bcrypt.hash(password, 10);
    const shop = await prisma.supplier.create({
        data: { name, password: hash, role },
    });

    return { id: shop.id, email: shop.name, role: shop.role };
}


export async function login(name: string, password: string, role: string) {
    const supplier = await prisma.supplier.findUnique({ where: { name, role } });

    if (!supplier) throw new Error("supplier or role not found");

    const isMatch = await bcrypt.compare(password, supplier.password);
    if (!isMatch) throw new Error("Wrong password");

    const token = getToken({ id: supplier.id, name: supplier.name, role: supplier.role });
    return { token };
}