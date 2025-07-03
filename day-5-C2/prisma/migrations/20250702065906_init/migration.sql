/*
  Warnings:

  - Added the required column `password` to the `Supplier` table without a default value. This is not possible if the table is not empty.
  - Added the required column `role` to the `Supplier` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Supplier" ADD COLUMN     "password" TEXT NOT NULL,
ADD COLUMN     "role" TEXT NOT NULL;
