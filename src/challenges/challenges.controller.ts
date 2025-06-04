import { Controller, Post, Body } from '@nestjs/common';
import { ChallengesService } from './challenges.service';
import { CreateChallengeDto } from './dto/create-challenge.dto';

@Controller('challenges')
export class ChallengesController {
  constructor(private readonly challengesService: ChallengesService) {}

  @Post()
  create(@Body() createChallengeDto: CreateChallengeDto) {
    // return this.challengesService.create(createChallengeDto);
    console.log(createChallengeDto);
  }

  @Post('generate')
  generateAndStoreTasks(@Body() input: { phq9: number; gad7: number }) {
    return this.challengesService.generateAndStoreTasks(input);
  }
}
