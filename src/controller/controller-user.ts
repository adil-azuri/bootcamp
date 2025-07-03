import { prisma } from "../connection/client";
import { RequestHandler } from "express";


export const getUser :RequestHandler =async (req,res)=>{
    try {
      const users = await prisma.user.findMany()
      res.status(200).json(users)
    } catch (error) {
        res.status(500).json({error: "Failed to fetch Data"})
    }
}

export const createUser :RequestHandler =async (req,res)=>{
    try {
      const {name} = req.body
      const user = await prisma.user.create({
        data: {name}
      })
      res.status(201).json(user)
    } catch (error) {
        res.status(500).json({error: "Failed to Create Post"})
    }
}

export const userWithPosts: RequestHandler = async (req, res) => {
    const userId = parseInt(req.params.id);
    try {
        const userWithPosts = await prisma.user.findUnique({
            where: { id: userId },
            include: {
                posts: {
                    orderBy: {
                        createAt: 'desc' 
                    }
                }
            }
        });
        res.status(200).json(userWithPosts);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch User with Posts" });
    }
};