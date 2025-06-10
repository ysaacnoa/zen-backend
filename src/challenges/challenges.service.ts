import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateChallengeDto } from './dto/create-challenge.dto';
import { IaService } from '../ia/ia.service';
import { GenerateChallengeDto } from '../ia/dto/generate-challenge.dto';
import { ChallengeType } from '../shared/types/challenge-type.enum';
import { randomUUID } from 'crypto';
import { ProgressStatus } from 'prisma/generated/prisma';
import { CHALLENGES_MOCK } from '../ia/ia.service.constants';

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

  private async getChallengeRequirements(challengeId: string) {
    const challenge = await this.prisma.challenge.findUnique({
      where: { id: challengeId },
      select: { requiredCompletions: true },
    });
    if (!challenge) throw new Error('Challenge not found');
    return challenge.requiredCompletions;
  }

  private determineCompletionStatus(
    current: number,
    required: number,
  ): ProgressStatus {
    if (current >= required) {
      return ProgressStatus.COMPLETED;
    }
    return current > 0 ? ProgressStatus.IN_PROGRESS : ProgressStatus.PENDING;
  }

  private buildCompletionData(
    userId: string,
    challengeId: string,
    status: ProgressStatus,
    count: number,
    metadata: object[],
    type: ChallengeType,
  ) {
    return {
      userId,
      challengeId,
      status,
      type,
      completedAt: new Date(),
      currentCompletions: count,
      metadata: metadata,
    };
  }

  private buildUpdateData(
    status: ProgressStatus,
    count: number,
    metadata: Record<string, any>,
  ) {
    return {
      status,
      completedAt: new Date(),
      currentCompletions: count,
      metadata: { push: metadata },
    };
  }

  private async createChallengeCompletion(
    userId: string,
    challengeId: string,
    completionCount: number,
    metadata: object[],
    type: ChallengeType,
  ) {
    const required = await this.getChallengeRequirements(challengeId);
    const status = this.determineCompletionStatus(completionCount, required);

    return this.prisma.challengeCompletion.upsert({
      where: { userId_challengeId: { userId, challengeId } },
      create: this.buildCompletionData(
        userId,
        challengeId,
        status,
        completionCount,
        metadata,
        type,
      ),
      update: this.buildUpdateData(status, completionCount, metadata),
    });
  }

  // Rest of the existing methods remain unchanged...
  private async validateChallenge(challengeId: string) {
    const challenge = await this.prisma.challenge.findUnique({
      where: { id: challengeId },
    });

    if (!challenge) throw new Error('Challenge not found');
    if (!challenge.isActive) throw new Error('Challenge is not active');
    if (challenge.isCompleted) throw new Error('Challenge already completed');

    return challenge;
  }

  private async updateChallenge(challengeId: string) {
    return this.prisma.challenge.update({
      where: { id: challengeId },
      data: {
        completionCount: { increment: 1 },
        lastCompletionDate: new Date(),
      },
    });
  }

  private async markChallengeAsCompleted(challengeId: string) {
    return this.prisma.challenge.update({
      where: { id: challengeId },
      data: {
        isCompleted: true,
        isActive: false,
      },
    });
  }

  private async deactivateChallenge(challengeId: string) {
    return this.prisma.challenge.update({
      where: { id: challengeId },
      data: { isActive: false },
    });
  }

  async completeChallenge(
    userId: string,
    challengeId: string,
    metadata?: object[],
  ) {
    await this.validateChallenge(challengeId);
    const updatedChallenge = await this.updateChallenge(challengeId);

    if (
      updatedChallenge.completionCount >= updatedChallenge.requiredCompletions
    ) {
      await this.markChallengeAsCompleted(challengeId);
    } else {
      await this.deactivateChallenge(challengeId);
    }

    const completion = await this.createChallengeCompletion(
      userId,
      challengeId,
      updatedChallenge.completionCount,
      metadata ?? [],
      updatedChallenge.type as ChallengeType,
    );

    return completion;
  }

  async reactivateEligibleChallenges() {
    const now = new Date();
    const sevenAM = new Date(
      now.getFullYear(),
      now.getMonth(),
      now.getDate(),
      7,
      0,
      0,
    );

    const checkDate =
      now < sevenAM
        ? new Date(sevenAM.getTime() - 24 * 60 * 60 * 1000)
        : sevenAM;

    return this.prisma.challenge.updateMany({
      where: {
        isActive: false,
        isCompleted: false,
        lastCompletionDate: {
          lte: checkDate,
        },
      },
      data: { isActive: true },
    });
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
    let challenges: GeneratedChallenge[] = CHALLENGES_MOCK;
    try {
      console.log(
        '[ChallengesService] Generating challenges with input:',
        input,
      );
      const challengesJson = await this.iaService.generateChallenge(input);
      console.log('[ChallengesService] Received:', challengesJson);

      const cleanJson = challengesJson
        .replace(/<think>[\s\S]*?<\/think>/g, '')
        .trim();

      let jsonString = cleanJson;
      const jsonMatch = cleanJson.match(/```json\n([\s\S]*?)\n```/);
      if (jsonMatch && jsonMatch[1]) {
        jsonString = jsonMatch[1];
      } else if (cleanJson.startsWith('[') || cleanJson.startsWith('{')) {
        jsonString = cleanJson;
      } else {
        console.log(
          '[ChallengesService] Using mock data due to invalid format',
        );
        challenges = CHALLENGES_MOCK;
      }

      if (!challenges) {
        challenges = JSON.parse(jsonString) as GeneratedChallenge[];
      }
    } catch (error) {
      console.log('[ChallengesService] Using mock data due to error:', error);
      challenges = CHALLENGES_MOCK;
    }

    const result = await this.prisma.$transaction(
      challenges.map((challenge) => {
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
    return this.typeMapper[type];
  }
}
