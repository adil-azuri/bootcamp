import { PrismaClient } from "../generated/prisma";
import { prisma } from "./client";

const Prisma = new PrismaClient();

async function main() {
    await prisma.supplier.deleteMany();
    await prisma.product.deleteMany();

    const supplier = await prisma.supplier.createMany({
        data: [
            { name: "PT Kapal Api" },
            { name: "CV Sampoerna" },
            { name: "PT AICE" },
        ]
    })

    // Seed Products
    const product = await prisma.product.createMany({
        data: [
            { name: "Cappucino", supplierId: 1, stock: 100 },
            { name: "Kopi Hitam", supplierId: 1, stock: 100 },
            { name: "Rokok Sampoerna", supplierId: 2, stock: 150 },
            { name: "Es Coklat", supplierId: 3, stock: 90 },
            { name: "Es Vanilla", supplierId: 3, stock: 80 },
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