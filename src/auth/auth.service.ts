import { Injectable, UnauthorizedException } from '@nestjs/common';
import { supabase } from '../supabase/supabase.client';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(private jwtService: JwtService) {}

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

  async register(email: string, password: string) {
    const { data, error } = await supabase.auth.signUp({ email, password });
    if (error) throw new UnauthorizedException(error.message);
    return this.createAuthResponse(data.user!);
  }
}
