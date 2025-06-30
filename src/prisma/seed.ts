import { PrismaClient } from "../generated/prisma";
import { prisma } from "./client";

const Prisma = new PrismaClient();

async function main() {
    await prisma.book.deleteMany();


    const users = await  prisma.book.createMany({
        data:[
             { id:1, name:"Buku 1"},
             { id:2, name:"Buku 2"},
             { id:3, name:"Buku 3"},
             { id:4, name:"Buku 4"},
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