/*
  Warnings:

  - You are about to drop the column `stock` on the `Products` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Products" DROP COLUMN "stock",
ALTER COLUMN "picture" SET DEFAULT 'null';
