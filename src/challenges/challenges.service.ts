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
  metadata?: Record<string, any>;
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

    // Extract JSON from response - remove <think> blocks first
    const cleanJson = challengesJson
      .replace(/<think>[\s\S]*?<\/think>/g, '')
      .trim();

    // Try multiple ways to extract JSON
    let jsonString = cleanJson;
    const jsonMatch = cleanJson.match(/```json\n([\s\S]*?)\n```/);
    if (jsonMatch && jsonMatch[1]) {
      jsonString = jsonMatch[1];
    } else if (cleanJson.startsWith('[') || cleanJson.startsWith('{')) {
      jsonString = cleanJson;
    } else {
      throw new Error(
        'Invalid response format - expected JSON array of challenges',
      );
    }

    let challenges: GeneratedChallenge[];
    try {
      challenges = JSON.parse(jsonString) as GeneratedChallenge[];
    } catch (error) {
      throw new Error(`Failed to parse challenges: ${error}`);
    }
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
            metadata: challenge.metadata,
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
