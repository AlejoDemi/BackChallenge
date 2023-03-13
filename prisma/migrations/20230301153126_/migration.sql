/*
  Warnings:

  - You are about to drop the column `senderId` on the `Mail` table. All the data in the column will be lost.
  - Added the required column `senderEmail` to the `Mail` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Mail" DROP CONSTRAINT "Mail_senderId_fkey";

-- AlterTable
ALTER TABLE "Mail" DROP COLUMN "senderId",
ADD COLUMN     "senderEmail" TEXT NOT NULL;
