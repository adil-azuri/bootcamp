import bcrypt from "bcrypt";
import { prisma } from "../prisma/client";
import { dapatToken } from "../utils/jwt";

export async function register(email: string, password: string, role: string) {
    if (!email.match(/@/) || password.length < 6) {
        throw new Error("Invalid input email or password");
    }
    const hash = await bcrypt.hash(password, 10);
    const user = await prisma.user.create({
        data: { email, password: hash, role },
    });

    return { id: user.id, email: user.email };
}


export async function login(email: string, password: string) {
    const user = await prisma.user.findUnique({ where: { email } });

    if (!user) throw new Error("User or role not found");

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) throw new Error("Wrong password");

    const token = dapatToken({ id: user.id, role: user.role });
    return { token };
}

export async function servUpdate(email: string, password: string) {
    if (!email.match(/@/) || password.length < 6) {
        throw new Error("Invalid input password (password must up to 6 character)");
    }
    const hash = await bcrypt.hash(password, 10);
    const user = await prisma.user.update({
        where: { email },
        data: { password: hash }
    });

    return { id: user.id, email: user.email };
}