import { Injectable, UnauthorizedException } from '@nestjs/common';
import { supabase } from '../supabase/supabase.client';
import { JwtService } from '@nestjs/jwt';
import { BadgeService } from '../gamification/badge/badge.service';

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    private badgeService: BadgeService,
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
    name?: string,
    avatarUrl?: string,
  ) {
    // Crear/actualizar perfil de usuario
    const { error: userError } = await supabase.from('users').upsert({
      id: userId,
      email,
      name,
      avatarUrl,
      xp: 0,
      level: 1,
      authProvider: 'EMAIL',
    });
    if (userError) throw new UnauthorizedException(userError.message);

    // Asignar insignia de bienvenida (manejo de errores interno en BadgeService)
    await this.badgeService.assignWelcomeBadge(userId);
  }

  async register(
    email: string,
    password: string,
    name?: string,
    avatarUrl?: string,
  ) {
    const { data, error } = await supabase.auth.signUp({ email, password });
    if (error) throw new UnauthorizedException(error.message);

    if (data.user) {
      await this.createUserProfile(
        data.user.id,
        data.user.email!,
        name,
        avatarUrl,
      );
    }

    return this.createAuthResponse(data.user!);
  }
}
