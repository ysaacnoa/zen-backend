/*
  Warnings:

  - You are about to drop the column `description` on the `challenges` table. All the data in the column will be lost.
  - You are about to drop the column `difficulty` on the `challenges` table. All the data in the column will be lost.
  - You are about to drop the column `duration` on the `challenges` table. All the data in the column will be lost.
  - You are about to drop the column `isDaily` on the `challenges` table. All the data in the column will be lost.
  - You are about to drop the column `isWeekly` on the `challenges` table. All the data in the column will be lost.
  - Added the required column `instructions` to the `challenges` table without a default value. This is not possible if the table is not empty.
  - Added the required column `type` to the `challenges` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "ChallengeType" AS ENUM ('CLICK', 'FORM', 'AUDIO', 'TIMER', 'TEXT');

-- AlterTable
ALTER TABLE "challenge_completions" ADD COLUMN     "currentCompletions" INTEGER NOT NULL DEFAULT 0;

-- AlterTable
ALTER TABLE "challenges" DROP COLUMN "description",
DROP COLUMN "difficulty",
DROP COLUMN "duration",
DROP COLUMN "isDaily",
DROP COLUMN "isWeekly",
ADD COLUMN     "instructions" TEXT NOT NULL,
ADD COLUMN     "requiredCompletions" INTEGER NOT NULL DEFAULT 1,
ADD COLUMN     "type" "ChallengeType" NOT NULL;
