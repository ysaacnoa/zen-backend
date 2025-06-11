import { Injectable } from '@nestjs/common';
import { UserService } from '../../user/user.service';
import { BadgeService } from '../badge/badge.service';
import { WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
import { Server } from 'socket.io';
import { Badge } from '../badge/dto/badge.dto';
import { LEVEL_THRESHOLDS } from '../constants/level.constants';

@WebSocketGateway()
@Injectable()
export class LevelService {
  @WebSocketServer()
  server: Server;

  constructor(
    private readonly userService: UserService,
    private readonly badgeService: BadgeService,
  ) {}
  calculateLevel(xp: number): number {
    for (let i = LEVEL_THRESHOLDS.length - 1; i >= 0; i--) {
      if (xp >= LEVEL_THRESHOLDS[i].xp) {
        return LEVEL_THRESHOLDS[i].level;
      }
    }
    return 1;
  }

  async checkLevelUp(
    userId: string,
  ): Promise<{ level: number; leveledUp: boolean }> {
    const user = await this.userService.getUserById(userId);
    const currentLevel = this.calculateLevel(user.xp);

    if (currentLevel > user.level) {
      await this.userService.updateUserXp(userId, user.xp); // Esto actualizará XP y nivel
      this.notifyLevelUp(userId, currentLevel);
      await this.checkBadgeUnlocks(userId);
      return { level: currentLevel, leveledUp: true };
    }
    return {
      level: user.level,
      leveledUp: false,
    };
  }

  async checkBadgeUnlocks(userId: string): Promise<void> {
    const user = await this.userService.getUserById(userId);
    const badges = await this.badgeService.findAll();

    for (const badge of badges) {
      if (
        user.xp >= badge.xpRequired &&
        !user.badgesEarned?.includes(badge.id)
      ) {
        await this.badgeService.awardBadge(userId, badge.id);
        this.notifyBadgeUnlock(userId, badge);
      }
    }
  }

  private notifyLevelUp(userId: string, newLevel: number): void {
    this.server.emit('notification', {
      type: 'LEVEL_UP',
      userId,
      data: { level: newLevel },
      timestamp: new Date().toISOString(),
    });
  }

  private notifyBadgeUnlock(userId: string, badge: Badge): void {
    this.server.emit('notification', {
      type: 'BADGE_UNLOCKED',
      userId,
      data: {
        badgeId: badge.id,
        badgeName: badge.name,
        badgeImage: badge.imagePath,
      },
      timestamp: new Date().toISOString(),
    });
  }
}
