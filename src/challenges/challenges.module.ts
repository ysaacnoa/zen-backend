import { Module } from '@nestjs/common';
import { ChallengesController } from './challenges.controller';
import { ChallengesService } from './challenges.service';
import { IaModule } from '../ia/ia.module';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [IaModule, PrismaModule],
  controllers: [ChallengesController],
  providers: [ChallengesService],
  exports: [ChallengesService],
})
export class ChallengesModule {}
