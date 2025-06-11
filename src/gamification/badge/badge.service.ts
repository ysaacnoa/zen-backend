import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { BadgeId } from '../../shared/types';
import { Badge, UserBadge } from './dto/badge.dto';
@Injectable()
export class BadgeService {
  async findAll(): Promise<Badge[]> {
    return await this.prisma.badge.findMany({
      where: { isActive: true },
      orderBy: { xpRequired: 'asc' },
    });
  }

  async awardBadge(userId: string, badgeId: string): Promise<void> {
    await this.prisma.badgeEarned.create({
      data: {
        userId,
        badgeId,
        earnedAt: new Date(),
      },
    });
  }
  constructor(private readonly prisma: PrismaService) {}
  async getAllBadges(): Promise<Badge[]> {
    return this.prisma.badge.findMany({
      orderBy: { createdAt: 'desc' },
    });
  }

  async getUserBadges(userId: string): Promise<UserBadge[]> {
    const badgesEarned = await this.prisma.badgeEarned.findMany({
      where: { userId },
      include: { badge: true },
      orderBy: { earnedAt: 'desc' },
    });

    return badgesEarned.map((badgeEarned) => ({
      id: badgeEarned.id,
      userId: badgeEarned.userId,
      badgeId: badgeEarned.badgeId,
      earnedAt: badgeEarned.earnedAt,
      name: badgeEarned.badge.name,
      description: badgeEarned.badge.description,
      xpRequired: badgeEarned.badge.xpRequired,
      imagePath: badgeEarned.badge.imagePath,
      isActive: badgeEarned.badge.isActive,
      createdAt: badgeEarned.badge.createdAt,
    }));
  }

  async assignWelcomeBadge(userId: string, badgeId: BadgeId): Promise<void> {
    await this.prisma.badgeEarned.create({
      data: {
        userId,
        badgeId,
        earnedAt: new Date(),
      },
    });
  }
}
