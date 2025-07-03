import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET as string;

export interface User_Payload {
    id: number;
    role: string;
}


export function dapatToken(payload: User_Payload) {
    return jwt.sign(payload, JWT_SECRET, { expiresIn: "1d" });
}



export function verifikasiToken(token: string) {
    return jwt.verify(token, JWT_SECRET) as User_Payload;
}