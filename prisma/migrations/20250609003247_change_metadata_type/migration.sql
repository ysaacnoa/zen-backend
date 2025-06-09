/*
  Warnings:

  - The `metadata` column on the `challenge_completions` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `metadata` column on the `challenges` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "challenge_completions" DROP COLUMN "metadata",
ADD COLUMN     "metadata" JSONB[] DEFAULT ARRAY[]::JSONB[];

-- AlterTable
ALTER TABLE "challenges" DROP COLUMN "metadata",
ADD COLUMN     "metadata" JSONB DEFAULT '{}';
