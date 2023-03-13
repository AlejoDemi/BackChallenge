-- AddForeignKey
ALTER TABLE "Mail" ADD CONSTRAINT "Mail_senderEmail_fkey" FOREIGN KEY ("senderEmail") REFERENCES "User"("email") ON DELETE RESTRICT ON UPDATE CASCADE;
