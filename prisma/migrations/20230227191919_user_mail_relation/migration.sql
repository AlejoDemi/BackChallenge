/*
  Warnings:

  - You are about to drop the column `Subject` on the `Mail` table. All the data in the column will be lost.
  - You are about to drop the column `from` on the `Mail` table. All the data in the column will be lost.
  - Added the required column `senderId` to the `Mail` table without a default value. This is not possible if the table is not empty.
  - Added the required column `subject` to the `Mail` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Mail" DROP COLUMN "Subject",
DROP COLUMN "from",
ADD COLUMN     "senderId" TEXT NOT NULL,
ADD COLUMN     "subject" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "Mail" ADD CONSTRAINT "Mail_senderId_fkey" FOREIGN KEY ("senderId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
