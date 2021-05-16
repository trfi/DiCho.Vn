-- AlterTable
ALTER TABLE "Message" ALTER COLUMN "deletedUser" DROP NOT NULL;

-- AlterTable
ALTER TABLE "MessageUser" ALTER COLUMN "lastMsg" DROP NOT NULL;
