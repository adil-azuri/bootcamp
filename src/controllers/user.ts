import { Request, Response } from "express";
import { prisma } from "../prisma/client";

export const transferPoint = async (req: Request, res: Response, next: any) => {
    const { amount, senderId, receiverId } = req.body
    try {
        if (amount <= 0) {
            res.status(400).json({ message: "Jumlah Point harus lebih dari 0" })
        }

        const [sender, receiver] = await Promise.all([
            prisma.user.findUnique({ where: { id: senderId } }),
            prisma.user.findUnique({ where: { id: receiverId } })
        ])

        if (!sender) {
            res.status(404).json({ message: "Pengirim Tidak Ditemukan" })
            return
        }
        if (!receiver) {
            res.status(404).json({ message: "Penerima Tidak Ditemukan" })
            return
        }

        if (sender.point < amount) {
            res.status(400).json({ message: "Jumlah point tidak cukup" })
        }

        //middleware prisma untuk transaction
        await prisma.$transaction(async (transfer) => {
            await transfer.user.update({
                where: { id: senderId },
                data: { point: { decrement: amount } }
            })
            await transfer.user.update({
                where: { id: receiverId },
                data: { point: { increment: amount } }
            })
            res.json("Transfer Point Berhasil")
        })
    } catch (error) {
        res.status(500).json("interal server error")
    }
}

export const getPoint = async (req: Request, res: Response, next: any) => {
    try {
        const userId = Number(req.params.id);
        const userPoint = await prisma.user.findUnique({
            where: { id: userId },
            select: {
                id: true,
                name: true,
                point: true
            }
        })

        res.status(200).json({ message: "Data Ditemukan", data: userPoint })
    } catch (error) {
        next(error)
    }
}