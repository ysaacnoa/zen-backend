export class CreateChallengeDto {
  title: string;
  instructions: string;
  type: 'CLICK' | 'FORM' | 'AUDIO' | 'TIMER' | 'TEXT';
  requiredCompletions: number;
  rewardXp?: number;
}
