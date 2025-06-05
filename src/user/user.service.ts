import { Injectable } from '@nestjs/common';
import { supabase } from '../supabase/supabase.client';

export interface UserProfile {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  avatarUrl?: string;
  xp: number;
  level: number;
  authProvider: string;
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
    const { data, error } = await supabase
      .from('users')
      .select('id,email,firstName,lastName,avatarUrl,xp,level,authProvider')
      .eq('id', userId)
      .maybeSingle();

    if (error) {
      throw new Error(`Failed to get user: ${error.message}`);
    }
    if (!data) {
      throw new Error(`User with ID ${userId} not found`);
    }
    const userProfile: UserProfile = {
      id: data.id as string,
      email: data.email as string,
      firstName: data.firstName as string,
      lastName: data.lastName as string,
      avatarUrl: data.avatarUrl as string | undefined,
      xp: data.xp as number,
      level: data.level as number,
      authProvider: data.authProvider as string,
    };
    return userProfile;
  }
}
