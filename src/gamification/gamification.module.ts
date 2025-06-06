import { Module } from '@nestjs/common';
import { ChallengesModule } from '../challenges/challenges.module';
import { BadgeModule } from './badge/badge.module';

@Module({
  imports: [BadgeModule, ChallengesModule],
  exports: [BadgeModule, ChallengesModule],
})
export class GamificationModule {}
