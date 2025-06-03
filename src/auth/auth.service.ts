import { Injectable, UnauthorizedException } from '@nestjs/common';
import { supabase } from '../supabase/supabase.client';
import { JwtService } from '@nestjs/jwt';
import { BadgeService } from '../gamification/badge/badge.service';
import { UserService } from '../user/user.service';
import { BadgeId } from 'src/shared/types';

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    private badgeService: BadgeService,
    private userService: UserService,
  ) {}

  private createAuthResponse(user: { id: string; email?: string | null }) {
    if (!user.email) throw new UnauthorizedException('User email missing');
    const payload = { sub: user.id, email: user.email };
    return {
      access_token: this.jwtService.sign(payload),
      user: payload,
    };
  }

  async login(email: string, password: string) {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) throw new UnauthorizedException(error.message);
    return this.createAuthResponse(data.user);
  }

  async validateToken(supabaseToken: string) {
    const { data, error } = await supabase.auth.getUser(supabaseToken);
    if (error || !data?.user) throw new UnauthorizedException(error?.message);
    return this.createAuthResponse(data.user);
  }

  private async createUserProfile(
    userId: string,
    email: string,
    firstName: string,
    lastName: string,
    avatarUrl?: string,
  ) {
    await this.userService.createOrUpdateUserProfile(
      userId,
      email,
      firstName,
      lastName,
      avatarUrl,
    );
    await this.badgeService.assignWelcomeBadge(userId, BadgeId.BEGINNER);
  }

  async register(
    email: string,
    password: string,
    firstName: string,
    lastName: string,
    avatarUrl?: string,
  ) {
    const { data, error } = await supabase.auth.signUp({ email, password });
    if (error) throw new UnauthorizedException(error.message);

    if (data.user) {
      await this.createUserProfile(
        data.user.id,
        data.user.email!,
        firstName,
        lastName,
        avatarUrl,
      );
    }

    return this.createAuthResponse(data.user!);
  }
}
