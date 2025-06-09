import { Injectable } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';
import { ChallengesService } from './challenges.service';

@Injectable()
export class ChallengesScheduler {
  constructor(private challengesService: ChallengesService) {}

  @Cron('0 7 * * *', {
    name: 'daily-challenge-reactivation',
    timeZone: 'America/Lima',
  })
  async handleDailyReactivation() {
    console.log('Running daily challenge reactivation at 7am');
    await this.challengesService.reactivateEligibleChallenges();
  }
}
