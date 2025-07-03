import { RequestHandler } from "express"
import { prisma } from "../prisma/client"


export const getOrder : RequestHandler = async (req,res)=>{
     const {orderBy,order,limit,offset } = req.query
    
    const filters : any = {}

    try {
        const orders = await prisma.order.findMany({
            where: filters,
            orderBy:{
                [orderBy as string]: order as "asc"|"desc"
            },
            take : Number (limit),
            skip : Number (offset)  
        })

        const total = await prisma.order.count({where :filters})
        res.json({data:orders, total})
    } catch (error) {
        res.status(500).json(error="Error to Fetch Data")
    }

} 

export const getOrderSummary : RequestHandler = async (req,res)=>{
       const {limit,offset} = req.query
    try {
        const orders = await prisma.order.groupBy({
            by: ["userid"],
            _sum: {
                quantity: true,
            },
            orderBy: {
                userid: "asc",
            },
            skip: Number(offset),
            take: Number(limit),
        })
        const total = orders.length
        res.json({ data: orders, total })
    } catch (error) {
        res.status(500).json({ message: `${error}` })
    }
}
