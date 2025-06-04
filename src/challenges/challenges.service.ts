import { Injectable } from '@nestjs/common';
// import { PrismaClient } from '../../generated/prisma';
// import { CreateChallengeDto } from './dto/create-challenge.dto';
import { IaService } from '../ia/ia.service';
import { GenerateTaskDto } from '../ia/dto/generate-task.dto';
import { ChallengeType } from '../shared/types/challenge-type.enum';
// import { randomUUID } from 'crypto';
interface GeneratedTask {
  title: string;
  instructions: string;
  type: string;
  requiredCompletions: number;
}

@Injectable()
export class ChallengesService {
  constructor(
    // private readonly prisma: PrismaClient,
    private readonly iaService: IaService,
  ) {}

  // async create(createChallengeDto: CreateChallengeDto) {
  //   return await this.prisma.challenge.create({
  //     data: createChallengeDto,
  //   });
  // }

  async generateAndStoreTasks(input: GenerateTaskDto) {
    console.log('[ChallengesService] Generating tasks with input:', input);
    const tasksJson = await this.iaService.generateTask(input);
    console.log('[ChallengesService] Received tasks JSON:', tasksJson);
    const tasks = JSON.parse(tasksJson) as GeneratedTask[];
    console.log('[ChallengesService] Parsed tasks:', tasks);

    console.log(
      '[ChallengesService] Starting transaction to create challenges',
    );
    // const result = await this.prisma.$transaction(
    //   tasks.map((task) => {
    //     console.log('[ChallengesService] Creating challenge:', task.title);
    //     return this.prisma.challenge.create({
    //       data: {
    //         id: randomUUID(),
    //         title: task.title,
    //         instructions: task.instructions,
    //         type: this.mapTaskType(task.type),
    //         requiredCompletions: task.requiredCompletions,
    //         rewardXp: 10 * task.requiredCompletions,
    //       },
    //     });
    //   }),
    // );
    console.log(
      '[ChallengesService] Successfully created challenges:',
      // result.length,
    );
    return 'result';
  }

  private readonly typeMapper: Record<string, ChallengeType> = {
    click: ChallengeType.CLICK,
    formulario: ChallengeType.FORM,
    audio: ChallengeType.AUDIO,
    temporizador: ChallengeType.TIMER,
    texto: ChallengeType.TEXT,
  };

  private mapTaskType(type: string): ChallengeType {
    const mappedType =
      this.typeMapper[type.toLowerCase()] || ChallengeType.TEXT;

    console.log(`[ChallengesService] Mapping type ${type} to ${mappedType}`);
    return mappedType;
  }
}
