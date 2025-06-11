import { Controller } from '@nestjs/common';
import { LevelService } from './level.service';

@Controller('levels')
export class LevelController {
  constructor(private readonly levelService: LevelService) {}
}
