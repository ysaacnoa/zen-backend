import { Injectable } from '@nestjs/common';
import { supabase } from '../supabase/supabase.client';
import { UpdateUserDto } from './dto/update-user.dto';

export interface UserProfile {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  avatarUrl?: string;
  bio?: string;
  location?: string;
  birthDate?: string;
  phoneNumber?: string;
  socialMediaLinks?: Record<string, string>;
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

  async updateUser(
    userId: string,
    updateData: UpdateUserDto,
  ): Promise<UserProfile> {
    const { error: updateError } = await supabase
      .from('users')
      .update({
        ...updateData,
        updatedAt: new Date().toISOString(),
      })
      .eq('id', userId)
      .select();

    this.handleSupabaseError(updateError, 'Failed to update user');
    return this.getUserById(userId);
  }

  async getUserById(userId: string): Promise<UserProfile> {
    const { data, error } = await supabase
      .from('users')
      .select(
        `
        id,
        email,
        firstName,
        lastName,
        avatarUrl,
        bio,
        location,
        birthDate,
        phoneNumber,
        socialMediaLinks,
        xp,
        level,
        authProvider
      `,
      )
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
      bio: data.bio as string,
      birthDate: data.birthDate as string | undefined,
      location: data.location as string | undefined,
      phoneNumber: data.phoneNumber as string | undefined,
      socialMediaLinks: data.socialMediaLinks as
        | Record<string, string>
        | undefined,
    };
    return userProfile;
  }

  async updateUserXp(userId: string, xp: number): Promise<UserProfile> {
    const { error: updateError } = await supabase
      .from('users')
      .update({
        xp,
        updatedAt: new Date().toISOString(),
      })
      .eq('id', userId)
      .select();

    this.handleSupabaseError(updateError, 'Failed to update user XP');
    return this.getUserById(userId);
  }
}
