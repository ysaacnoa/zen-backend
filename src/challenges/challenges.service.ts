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
  private readonly HOURS_TO_REACTIVATE = 24;

  constructor(
    private readonly prisma: PrismaService,
    private readonly iaService: IaService,
  ) {}

  async completeChallenge(
    userId: string,
    challengeId: string,
    metadata?: Record<string, any>[],
  ) {
    const challenge = await this.prisma.challenge.findUnique({
      where: { id: challengeId },
    });

    if (!challenge) {
      throw new Error('Challenge not found');
    }

    if (!challenge.isActive) {
      throw new Error('Challenge is not active');
    }

    if (challenge.isCompleted) {
      throw new Error('Challenge already completed');
    }

    // Update completion count
    const updatedChallenge = await this.prisma.challenge.update({
      where: { id: challengeId },
      data: {
        completionCount: { increment: 1 },
        lastCompletionDate: new Date(),
        metadata: {
          set: metadata || [],
        },
      },
    });

    // Check if required completions reached
    if (
      updatedChallenge.completionCount >= updatedChallenge.requiredCompletions
    ) {
      await this.prisma.challenge.update({
        where: { id: challengeId },
        data: {
          isCompleted: true,
          isActive: false,
        },
      });
    } else {
      // Not enough completions yet, deactivate temporarily
      await this.prisma.challenge.update({
        where: { id: challengeId },
        data: {
          isActive: false,
        },
      });
    }

    // Create completion record
    const completion = await this.prisma.challengeCompletion.create({
      data: {
        userId,
        challengeId,
        status: 'COMPLETED',
        completedAt: new Date(),
        completionDate: new Date(),
        currentCompletions: updatedChallenge.completionCount,
        metadata: metadata || [],
      },
    });

    return {
      challenge: updatedChallenge,
      completion,
    };
  }

  async checkAndReactivateChallenges(userId: string) {
    const now = new Date();
    const inactiveChallenges = await this.prisma.challenge.findMany({
      where: {
        userId,
        isActive: false,
        isCompleted: false,
        lastCompletionDate: {
          not: null,
        },
      },
    });

    const promises = inactiveChallenges.map(async (challenge) => {
      if (challenge.lastCompletionDate) {
        const hoursSinceCompletion =
          (now.getTime() - challenge.lastCompletionDate.getTime()) /
          (1000 * 60 * 60);

        if (hoursSinceCompletion >= this.HOURS_TO_REACTIVATE) {
          return this.prisma.challenge.update({
            where: { id: challenge.id },
            data: { isActive: true },
          });
        }
      }
      return null;
    });

    const results = await Promise.all(promises);
    return results.filter((r) => r !== null);
  }

  async create(createChallengeDto: CreateChallengeDto) {
    const data = {
      ...createChallengeDto,
      metadata: createChallengeDto.metadata || [],
    };
    return await this.prisma.challenge.create({
      data,
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
            metadata: Array.isArray(challenge.metadata)
              ? challenge.metadata
              : [challenge.metadata || {}],
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
