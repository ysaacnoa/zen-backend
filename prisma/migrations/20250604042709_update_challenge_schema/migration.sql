-- DropForeignKey
ALTER TABLE "challenge_completions" DROP CONSTRAINT "challenge_completions_challengeId_fkey";

-- AlterTable
ALTER TABLE "challenges" ADD COLUMN     "completionCount" INTEGER NOT NULL DEFAULT 0;
