import { RequestHandler } from "express";
import { prisma } from "../prisma/client"

export const getBook : RequestHandler = async (req,res)=>{
    const book = await prisma.book.findMany()
    res.json(book)
}