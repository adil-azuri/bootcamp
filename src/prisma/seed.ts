import { PrismaClient } from "../generated/prisma";
import { prisma } from "./client";

const Prisma = new PrismaClient();

async function main() {
    await prisma.order.deleteMany();
    await prisma.products.deleteMany();
    await prisma.user.deleteMany();


    const users = await  prisma.user.createMany({
        data:[
            {name: "Adil", email:"adil@gmail.com"},
            {name: "John", email:"John@gmail.com"},
            {name: "Doe", email:"Doe@gmail.com"}
        ]
    })

    const products = await  prisma.products.createMany({
        data:[
            {name:"Keyboard", price:350_000, stock:12},
            {name:"Mouse", price:150_000, stock:30},
            {name:"Monitor", price:1_500_000, stock:5},
            {name:"Laptop", price:8_000_000, stock:3},
            {name:"Usb Hub", price:100_000, stock:50},
        ]
    })

     const order = await  prisma.order.createMany({
        data:[
            {userid:1, Productid:1,quantity:2 },
            {userid:1, Productid:2,quantity:1 },
            {userid:2, Productid:3,quantity:1 },
            {userid:2, Productid:4,quantity:2 },
            {userid:3, Productid:2,quantity:4 },
            {userid:3, Productid:5,quantity:3 },
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