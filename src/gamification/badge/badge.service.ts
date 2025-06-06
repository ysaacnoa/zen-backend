import { Injectable } from '@nestjs/common';
import { supabase } from '../../supabase/supabase.client';
import { BadgeId } from '../../shared/types';
import { randomUUID } from 'crypto';
import { Badge, BadgeEarned, SupabaseMutationResponse } from './dto/badge.dto';
@Injectable()
export class BadgeService {
  private handleSupabaseError(
    error: { message: string } | null,
    context: string,
  ) {
    if (error) throw new Error(`${context}: ${error.message}`);
  }

  async getAllBadges(): Promise<Badge[]> {
    const { data, error } = await supabase
      .from('badges')
      .select('*')
      .order('createdAt', { ascending: false });

    this.handleSupabaseError(error, 'Failed to get badges');
    return data as Badge[];
  }

  async getUserBadges(userId: string): Promise<BadgeEarned[]> {
    const { data, error } = await supabase
      .from('badges_earned')
      .select('*, badge:badges(*)')
      .eq('userId', userId)
      .order('earnedAt', { ascending: false });

    this.handleSupabaseError(error, 'Failed to get user badges');
    return data as BadgeEarned[];
  }

  async assignWelcomeBadge(userId: string, badgeId: BadgeId): Promise<void> {
    const response: SupabaseMutationResponse = await supabase
      .from('badges_earned')
      .insert({
        id: randomUUID(),
        userId,
        badgeId,
        earnedAt: new Date().toISOString(),
      });

    this.handleSupabaseError(response.error, 'Failed to assign badge');
  }
}
