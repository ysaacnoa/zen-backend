import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { ProgressStatus } from 'prisma/generated/prisma';

@Injectable()
export class AnalyticsService {
  constructor(private prisma: PrismaService) {}

  async getCompletionTrends(userId: string) {
    const completions = await this.prisma.challengeCompletion.findMany({
      where: { userId },
      orderBy: { completedAt: 'asc' },
      select: {
        completedAt: true,
        status: true,
        currentCompletions: true,
        challengeId: true,
        type: true,
      },
    });

    // Get challenge details for each completion
    const challenges = await this.prisma.challenge.findMany({
      where: {
        id: { in: completions.map((c) => c.challengeId) },
      },
      select: {
        id: true,
        title: true,
        type: true,
      },
    });

    // Merge completion data with challenge details
    return completions.map((completion) => ({
      ...completion,
      challenge: challenges.find((c) => c.id === completion.challengeId),
    }));
  }

  async getChallengeTypeDistribution(userId: string) {
    // Mock data for testing
    const mockData = [
      {
        date: '2025-06-07',
        types: [
          { type: 'CLICK', count: 2 },
          { type: 'TEXT', count: 2 },
          { type: 'FORM', count: 2 },
          { type: 'TIMER', count: 4 },
          { type: 'AUDIO', count: 2 },
        ],
      },
      {
        date: '2025-06-08',
        types: [
          { type: 'CLICK', count: 1 },
          { type: 'TEXT', count: 3 },
          { type: 'FORM', count: 2 },
          { type: 'TIMER', count: 4 },
          { type: 'AUDIO', count: 3 },
        ],
      },
    ];

    const completions = await this.prisma.challengeCompletion.findMany({
      where: { userId },
      select: {
        completedAt: true,
        type: true,
      },
      orderBy: { completedAt: 'asc' },
    });

    // Group by date and type
    const dailyStats = completions.reduce(
      (acc, completion) => {
        if (!completion.completedAt) return acc;
        const date = completion.completedAt.toISOString().split('T')[0];
        const type = completion.type || 'UNKNOWN';

        if (!acc[date]) {
          acc[date] = {};
        }

        if (!acc[date][type]) {
          acc[date][type] = 0;
        }

        acc[date][type]++;

        return acc;
      },
      {} as Record<string, Record<string, number>>,
    );

    const realData = Object.entries(dailyStats).map(([date, types]) => ({
      date,
      types: Object.entries(types).map(([type, count]) => ({ type, count })),
    }));

    return [...mockData, ...realData];
  }

  async getCompletionStats(userId: string) {
    const [completed, inProgress, pending, total] = await Promise.all([
      this.prisma.challengeCompletion.count({
        where: {
          userId,
          status: ProgressStatus.COMPLETED,
        },
      }),
      this.prisma.challengeCompletion.count({
        where: {
          userId,
          status: ProgressStatus.IN_PROGRESS,
        },
      }),
      this.prisma.challengeCompletion.count({
        where: {
          userId,
          status: ProgressStatus.PENDING,
        },
      }),
      this.prisma.challengeCompletion.count({
        where: { userId },
      }),
    ]);

    return {
      completed,
      inProgress,
      pending,
      total,
      completionRate: total > 0 ? (completed / total) * 100 : 0,
      progressRate: total > 0 ? (inProgress / total) * 100 : 0,
    };
  }

  async getTypeDistribution(userId: string) {
    const results = await this.prisma.challengeCompletion.groupBy({
      by: ['type'],
      where: { userId },
      _count: { type: true },
    });

    return results.map((r) => ({
      type: r.type,
      count: r._count.type,
    }));
  }
}
