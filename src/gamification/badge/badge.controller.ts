import { Controller, Get, Query } from '@nestjs/common';
import { BadgeService } from './badge.service';

@Controller('badges')
export class BadgeController {
  constructor(private readonly badgeService: BadgeService) {}

  @Get()
  async getAllBadges() {
    return this.badgeService.getAllBadges();
  }

  @Get(':userId')
  async getUserBadges(@Query('userId') userId: string) {
    return this.badgeService.getUserBadges(userId);
  }
}
