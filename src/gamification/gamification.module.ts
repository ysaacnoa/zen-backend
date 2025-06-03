import { Module } from '@nestjs/common';
import { BadgeService } from './badge/badge.service';
import { BadgeController } from './badge/badge.controller';

@Module({
  providers: [BadgeService],
  controllers: [BadgeController],
})
export class GamificationModule {}
