import { Controller, Post, Body, Get, Query } from '@nestjs/common';
import { IaService } from './ia.service';
import { GenerateRecommendationDto } from './dto/generate-recomendation.dto';

@Controller('ia')
export class IaController {
  constructor(private readonly iaService: IaService) {}

  @Post('recommendation')
  generateRecommendations(@Body() input: GenerateRecommendationDto) {
    return this.iaService.generateRecommendation(input);
  }

  @Get('recommendation')
  getRecommendationsByUser(@Query('userId') userId: string) {
    return this.iaService.getRecommendationsByUser(userId);
  }
}
