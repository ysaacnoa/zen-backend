import { Module } from '@nestjs/common';
import { BadgeService } from './badge.service';
import { BadgeController } from './badge.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  providers: [BadgeService],
  controllers: [BadgeController],
  exports: [BadgeService],
})
export class BadgeModule {}
