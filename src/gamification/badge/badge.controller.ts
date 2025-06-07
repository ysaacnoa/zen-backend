import { Controller, Get, Query } from '@nestjs/common';
import { BadgeService } from './badge.service';
import { UserBadge } from './dto/badge.dto';

@Controller('badges')
export class BadgeController {
  constructor(private readonly badgeService: BadgeService) {}

  @Get()
  async getAllBadges() {
    return this.badgeService.getAllBadges();
  }

  @Get('user')
  async getUserBadges(@Query('userId') userId: string): Promise<UserBadge[]> {
    return this.badgeService.getUserBadges(userId);
  }
}
