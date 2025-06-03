import { Injectable, Logger } from '@nestjs/common';
import { supabase } from '../../supabase/supabase.client';
import { BadgeId } from '../../shared/types';
import { randomUUID } from 'crypto';

@Injectable()
export class BadgeService {
  private readonly logger = new Logger(BadgeService.name);

  async assignWelcomeBadge(userId: string, badgeId: BadgeId): Promise<void> {
    try {
      await supabase.from('badges_earned').insert({
        id: randomUUID(),
        userId,
        badgeId,
      });
    } catch (error) {
      this.logger.error('Error asignando insignia:', error);
    }
  }
}
