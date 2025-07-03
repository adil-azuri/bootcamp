import { RequestHandler } from "express"
import { prisma } from "../prisma/client"


export const getPosts : RequestHandler = async (req,res)=>{
    const {sortBy,orderBy,limit,offset } = req.query
    console.log(sortBy,orderBy);
    
    const filters : any = {}
    try {
        const posts = await prisma.posts.findMany({
            where: filters,
            orderBy:{
                [sortBy as string]: orderBy as "asc"|"desc"
            },
            take : Number (limit),
            skip : Number (offset)  
        })

        const total = await prisma.posts.count({where :filters})
        res.json({data:posts, total})
    } catch (error) {
        res.status(500).json(error="Error to Fetch Data")
    }

} 