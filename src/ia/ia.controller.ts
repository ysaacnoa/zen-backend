// 6. ia.controller.ts
import { Controller, Post, Body } from '@nestjs/common';
import { IaService } from './ia.service';
import { GenerateRecommendationDto } from './dto/generate-recomendation.dto';
import { GenerateTaskDto } from './dto/generate-task.dto';

@Controller('ia')
export class IaController {
  constructor(private readonly iaService: IaService) {}

  @Post('recommendation')
  generateRecommendations(@Body() input: GenerateRecommendationDto) {
    return this.iaService.generateRecommendation(input);
  }

  @Post('tasks')
  generateTasks(@Body() input: GenerateTaskDto) {
    return this.iaService.generateTask(input);
  }
}
