-- AlterTable
ALTER TABLE "users" ADD COLUMN     "bio" TEXT,
ADD COLUMN     "birthDate" TIMESTAMP(3),
ADD COLUMN     "location" TEXT,
ADD COLUMN     "phoneNumber" TEXT,
ADD COLUMN     "socialMediaLinks" JSONB;
