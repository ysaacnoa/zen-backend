/*
  Warnings:

  - The `metadata` column on the `challenges` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "challenge_completions" ADD COLUMN     "completionDate" TIMESTAMP(3),
ADD COLUMN     "metadata" JSONB;

-- AlterTable
ALTER TABLE "challenges" ADD COLUMN     "isActive" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN     "isCompleted" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "lastCompletionDate" TIMESTAMP(3),
DROP COLUMN "metadata",
ADD COLUMN     "metadata" JSONB[] DEFAULT ARRAY[]::JSONB[];
