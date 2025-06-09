/*
  Warnings:

  - Added the required column `type` to the `challenge_completions` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "challenge_completions" ADD COLUMN     "type" "ChallengeType" NOT NULL;

-- AddForeignKey
ALTER TABLE "challenge_completions" ADD CONSTRAINT "challenge_completions_challengeId_fkey" FOREIGN KEY ("challengeId") REFERENCES "challenges"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
