import { Controller, Post, Body, Get, Query } from '@nestjs/common';
import { ChallengesService } from './challenges.service';
import { CreateChallengeDto } from './dto/create-challenge.dto';
import { GenerateChallengeDto } from '../ia/dto/generate-challenge.dto';

@Controller('challenges')
export class ChallengesController {
  constructor(private readonly challengesService: ChallengesService) {}

  @Post()
  create(@Body() createChallengeDto: CreateChallengeDto) {
    return this.challengesService.create(createChallengeDto);
  }

  @Post('generate')
  async generateChallenges(@Body() input: GenerateChallengeDto) {
    return this.challengesService.generateAndStoreChallenges({
      ...input,
    });
  }

  @Get()
  getChallenges(@Query('userId') userId: string) {
    if (!userId) {
      throw new Error('userId query parameter is required');
    }
    return this.challengesService.findByUserId(userId);
  }

  @Post('complete')
  async completeChallenge(
    @Body() body: { userId: string; challengeId: string; metadata?: object[] },
  ) {
    return this.challengesService.completeChallenge(
      body.userId,
      body.challengeId,
      body.metadata,
    );
  }
}
