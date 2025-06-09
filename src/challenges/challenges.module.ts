import { Module } from '@nestjs/common';
import { ScheduleModule } from '@nestjs/schedule';
import { ChallengesController } from './challenges.controller';
import { ChallengesService } from './challenges.service';
import { ChallengesScheduler } from './challenges.scheduler';
import { IaModule } from '../ia/ia.module';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [ScheduleModule.forRoot(), IaModule, PrismaModule],
  controllers: [ChallengesController],
  providers: [ChallengesService, ChallengesScheduler],
  exports: [ChallengesService],
})
export class ChallengesModule {}
