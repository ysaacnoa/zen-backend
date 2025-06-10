import { Controller, Get, Query } from '@nestjs/common';
import { AnalyticsService } from './analytics.service';

@Controller('analytics')
export class AnalyticsController {
  constructor(private readonly analyticsService: AnalyticsService) {}

  @Get('trends')
  async getCompletionTrends(@Query('userId') userId: string) {
    return this.analyticsService.getCompletionTrends(userId);
  }

  @Get('distribution')
  async getChallengeTypeDistribution(@Query('userId') userId: string) {
    return this.analyticsService.getChallengeTypeDistribution(userId);
  }

  @Get('stats')
  async getCompletionStats(@Query('userId') userId: string) {
    return this.analyticsService.getCompletionStats(userId);
  }

  @Get('types')
  async getTypeDistribution(@Query('userId') userId: string) {
    return this.analyticsService.getTypeDistribution(userId);
  }
}
