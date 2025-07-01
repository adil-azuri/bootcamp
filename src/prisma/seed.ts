import { PrismaClient } from "../generated/prisma";
import { prisma } from "./client";

const Prisma = new PrismaClient();

async function main() {
    await prisma.user.deleteMany();


    const users = await prisma.user.createMany({
        data: [
            { name: "Adil", email: "adil@gmail.com", point: 800 },
            { name: "John", email: "John@gmail.com", point: 1000 },
            { name: "Doe", email: "Doe@gmail.com", point: 500 }
        ]
    })
}

main()
    .then(() => {
        console.log("Seeding Complete");
    })
    .catch((e) => {
        console.log(e);
    })
    .finally(async () => {
        await prisma.$disconnect();
    })