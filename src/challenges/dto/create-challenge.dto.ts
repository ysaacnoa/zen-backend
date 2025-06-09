import { ChallengeType } from '../../shared/types/challenge-type.enum';

export class CreateChallengeDto {
  userId: string;
  title: string;
  instructions: string;
  type: ChallengeType;
  requiredCompletions: number;
  rewardXp?: number;
  metadata?: Record<string, any>[];
}
