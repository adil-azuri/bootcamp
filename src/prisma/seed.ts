import { PrismaClient } from "../generated/prisma";
import { prisma } from "./client";

const Prisma = new PrismaClient();

async function main() {
    await prisma.user.deleteMany();
    await prisma.posts.deleteMany();
    await prisma.comment.deleteMany();

    const users = await  prisma.user.createMany({
        data:[
            {name: "Adil", email:"adil@gmail.com"},
            {name: "John", email:"John@gmail.com"},
            {name: "Diana", email:"Doe@gmail.com"}
        ]
    })

    const posts = await  prisma.posts.createMany({
        data:[
            {userId : 1, title: "First Posts", category:"game"},
            {userId : 1, title: "My Photo", category:"photo"},

            {userId : 2, title: "john Posts", category:"game"},

            {userId : 3, title: "Diana Photo", category:"photo"},
            {userId : 3, title: "breakfast", category:"photo"}
        ]
    })

    const commnets = await  prisma.comment.createMany({
        data:[
            {postId:1, userId:1,  comments:"this so fun "},
            {postId:1, userId:2,  comments:"ow i want to play too"},
            {postId:2, userId:2,  comments:"Good photo"},
            {postId:2, userId:1,  comments:"Thanks"},
            {postId:3, userId:1,  comments:"it is this game is fun?"},
            {postId:3, userId:2,  comments:"it is fun ImO"},
            {postId:4, userId:3,  comments:"hi this me Diana"},
            {postId:4, userId:1,  comments:"hi Diana"},
            {postId:4, userId:2,  comments:"hallo Diana"},
            {postId:5, userId:3,  comments:"this is my breakfast"},
            {postId:5, userId:2,  comments:"Looks Delicious"},
            {postId:5, userId:1,  comments:"can I get one :D"},
        ]
    })
}

main()
.then(()=>{
    console.log("Seeding Complete");
})
.catch((e)=>{
    console.log(e);
})
.finally(async()=>{
    await prisma.$disconnect();
})