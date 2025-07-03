import { prisma } from "../connection/client";
import { RequestHandler } from "express";


export const getPosts :RequestHandler =async (req,res)=>{
    try {
      const posts = await prisma.posts.findMany()
      res.status(200).json(posts)
    } catch (error) {
        res.status(500).json({error: "Failed to fetch Data"})
    }
}

export const createPosts :RequestHandler =async (req,res)=>{
    try {
      const {title, content,userid} = req.body
      const post = await prisma.posts.create({
        data: {title,content,userid}
      })
      res.status(201).json(post)
    } catch (error) {
      res.status(500).json({error: "Failed to Create Post"})
    }
  }
  
  export const detailPosts: RequestHandler = async (req,res)=>{
    try {
       const id = parseInt (req.params.id);  
    const posts = await prisma.posts.findUnique({
      where: { 
        id: id
      },
    })
    res.status(201).json(posts)
    } catch (error) {
      res.status(500).json({error: "Failed to fetch Data"})
    }
   
  };


  export const deletePosts: RequestHandler = async (req,res)=>{
    try {
      const id = parseInt (req.params.id);  
    const deletePosts = await prisma.posts.delete({
      where: { 
        id: id
      },
    })
    res.status(201).json({caution : "Sucsess Delete Post = ",deletePosts})

  } catch (error) {
    res.status(500).json({error: "Failed to Delete Post"})
    }
    
  };