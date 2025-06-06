import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateChallengeDto } from './dto/create-challenge.dto';
import { IaService } from '../ia/ia.service';
import { GenerateChallengeDto } from '../ia/dto/generate-challenge.dto';
import { ChallengeType } from '../shared/types/challenge-type.enum';
import { randomUUID } from 'crypto';

interface GeneratedChallenge {
  title: string;
  instructions: string;
  type: string;
  requiredCompletions: number;
}

@Injectable()
export class ChallengesService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly iaService: IaService,
  ) {}

  async create(createChallengeDto: CreateChallengeDto) {
    return await this.prisma.challenge.create({
      data: createChallengeDto,
    });
  }

  async findByUserId(userId: string) {
    return await this.prisma.challenge.findMany({
      where: { userId },
      orderBy: { createdAt: 'desc' },
    });
  }

  async generateAndStoreChallenges(input: GenerateChallengeDto) {
    console.log('[ChallengesService] Generating challenges with input:', input);
    const challengesJson = await this.iaService.generateChallenge(input);
    console.log('[ChallengesService] Received:', challengesJson);

    // Extract JSON from response
    const jsonMatch = challengesJson.match(/```json\n([\s\S]*?)\n```/);
    if (!jsonMatch || !jsonMatch[1]) {
      throw new Error('Could not extract JSON from response');
    }

    const challenges = JSON.parse(jsonMatch[1]) as GeneratedChallenge[];
    console.log('[ChallengesService] Parsed challenges:', challenges);

    const result = await this.prisma.$transaction(
      challenges.map((challenge) => {
        console.log('[ChallengesService] Creating challenge:', challenge.title);
        return this.prisma.challenge.create({
          data: {
            id: randomUUID(),
            title: challenge.title,
            instructions: challenge.instructions,
            type: this.mapChallengeType(challenge.type),
            requiredCompletions: challenge.requiredCompletions,
            rewardXp: 10 * challenge.requiredCompletions,
            userId: input.userId,
          },
        });
      }),
    );
    console.log('[ChallengesService] Successfully created:', result.length);
    return result;
  }

  private readonly typeMapper: Record<string, ChallengeType> = {
    click: ChallengeType.CLICK,
    formulario: ChallengeType.FORM,
    audio: ChallengeType.AUDIO,
    temporizador: ChallengeType.TIMER,
    texto: ChallengeType.TEXT,
  };

  private mapChallengeType(type: string): ChallengeType {
    const mappedType =
      this.typeMapper[type.toLowerCase()] || ChallengeType.TEXT;
    console.log(`[ChallengesService] Mapping type ${type} to ${mappedType}`);
    return mappedType;
  }
}
