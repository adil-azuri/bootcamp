import { Request, Response, NextFunction } from "express";
import { prisma } from "../prisma/client";



export const getSupplier = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const SupplierId = Number(req.params.id);

        if (SupplierId <= 0) {
            res.status(400).json({ message: "Supplier Tidak Ditemukan" })
            return
        }
        const stockProduct = await prisma.supplier.findUnique({
            where: { id: SupplierId },
            select: {
                name: true,
                products: {
                    select: {
                        id: true,
                        name: true,
                        stock: true
                    }
                }
            }
        })
        res.status(200).json({ message: "Data Ditemukan", data: stockProduct })
    } catch (error) {
        next(error)
    }
}


export const updateStock = async (req: Request, res: Response, next: any) => {
    const { stock, productId } = req.body

    try {
        if (stock <= 0) {
            res.status(400).json({ message: "Jumlah Stock harus lebih dari 1" })
        }

        const product = await prisma.product.findUnique({ where: { id: productId } })


        if (!product) {
            res.status(404).json({ message: "Product Tidak Ditemukan" })
            return
        }

        //middleware prisma untuk transaction
        await prisma.$transaction(async (update) => {
            await update.product.update({
                where: { id: productId },
                data: { stock: stock }
            })
            res.json("update Stock Berhasil")
        })
    } catch (error) {
        res.status(500).json("interal server error")
    }
}

