/*
  Warnings:

  - You are about to drop the `Order` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Products` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Order" DROP CONSTRAINT "Order_Productid_fkey";

-- DropForeignKey
ALTER TABLE "Order" DROP CONSTRAINT "Order_userid_fkey";

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "point" INTEGER NOT NULL DEFAULT 0;

-- DropTable
DROP TABLE "Order";

-- DropTable
DROP TABLE "Products";
