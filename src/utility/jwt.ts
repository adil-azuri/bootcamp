// src/utils/jwt.ts
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET as string;

//user token
export interface UserPayload {
    email: string;
    role: string;
}
export function signToken(payload: UserPayload) {
    return jwt.sign(payload, JWT_SECRET, { expiresIn: "1d" });
}



export function verifyToken(token: string) {
    return jwt.verify(token, JWT_SECRET) as UserPayload;
}


//supply token
export interface SupplyPayload {
    name: string;
    role: string;
}

export function sign_token_Supplyer(payload: SupplyPayload) {
    return jwt.sign(payload, JWT_SECRET, { expiresIn: "1d" });
}

export function verify_token_Supplyer(token: string) {
    return jwt.verify(token, JWT_SECRET) as SupplyPayload;
}