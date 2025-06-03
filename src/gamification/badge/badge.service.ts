import { Injectable, Logger } from '@nestjs/common';
import { supabase } from '../../supabase/supabase.client';

@Injectable()
export class BadgeService {
  private readonly logger = new Logger(BadgeService.name);

  async assignWelcomeBadge(userId: string): Promise<void> {
    interface Badge {
      id: string;
    }
    type SupabaseResponse = {
      data: Badge | null;
      error: Error | null;
    };

    const { data: badge, error: badgeError } = (await supabase
      .from('badges')
      .select('id')
      .eq('name', 'Nuevo Usuario')
      .single()) as SupabaseResponse;

    if (badgeError) {
      this.logger.error('Error buscando insignia:', badgeError.message);
      return;
    }

    if (badge) {
      const { error: earnError } = await supabase.from('badges_earned').insert({
        userId,
        badgeId: badge.id,
      });
      if (earnError) {
        this.logger.error('Error asignando insignia:', earnError.message);
      }
    }
  }
}
