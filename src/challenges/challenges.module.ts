import { Module } from '@nestjs/common';
import { ScheduleModule } from '@nestjs/schedule';
import { ChallengesController } from './challenges.controller';
import { ChallengesService } from './challenges.service';
import { IaModule } from '../ia/ia.module';
import { PrismaModule } from '../prisma/prisma.module';
import { UserModule } from 'src/user/user.module';

@Module({
  imports: [ScheduleModule.forRoot(), IaModule, PrismaModule, UserModule],
  controllers: [ChallengesController],
  providers: [ChallengesService],
  exports: [ChallengesService],
})
export class ChallengesModule {}
