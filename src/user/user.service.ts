import { Injectable } from '@nestjs/common';
import { supabase } from '../supabase/supabase.client';

interface UserProfile {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  avatarUrl?: string;
  xp: number;
  level: number;
  authProvider: string;
}

interface SupabaseUserResponse {
  data: UserProfile | null;
  error: { message: string } | null;
}

interface SupabaseMutationResponse {
  error: { message: string } | null;
}

@Injectable()
export class UserService {
  private handleSupabaseError(
    error: { message: string } | null,
    context: string,
  ) {
    if (error) throw new Error(`${context}: ${error.message}`);
  }

  async createOrUpdateUserProfile(
    userId: string,
    email: string,
    firstName: string,
    lastName: string,
    avatarUrl?: string,
  ) {
    const response: SupabaseMutationResponse = await supabase
      .from('users')
      .upsert({
        id: userId,
        email,
        firstName,
        lastName,
        avatarUrl,
        xp: 0,
        level: 1,
        authProvider: 'EMAIL',
        updatedAt: new Date().toISOString(),
      });
    this.handleSupabaseError(response.error, 'Failed to create/update profile');
  }

  async getUserById(userId: string): Promise<UserProfile> {
    const response: SupabaseUserResponse = await supabase
      .from('users')
      .select('*')
      .eq('id', userId)
      .single();
    this.handleSupabaseError(response.error, 'Failed to get user');
    if (!response.data) throw new Error('User not found');
    return response.data;
  }
}
