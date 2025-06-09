/*
  Warnings:

  - A unique constraint covering the columns `[userId,challengeId]` on the table `challenge_completions` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `type` to the `challenge_completions` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "challenge_completions" ADD COLUMN "type" "ChallengeType" NOT NULL DEFAULT 'TEXT';

-- CreateIndex
CREATE UNIQUE INDEX "challenge_completions_userId_challengeId_key" ON "challenge_completions"("userId", "challengeId");
