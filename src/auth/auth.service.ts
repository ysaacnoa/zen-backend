import { Injectable, UnauthorizedException } from '@nestjs/common';
import { supabase } from '../supabase/supabase.client';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(private jwtService: JwtService) {}

  async validateToken(supabaseToken: string) {
    const { data, error } = await supabase.auth.getUser(supabaseToken);
    if (error || !data?.user) throw new UnauthorizedException();

    const payload = {
      sub: data.user.id,
      email: data.user.email,
    };

    return {
      access_token: this.jwtService.sign(payload),
      user: payload,
    };
  }
}
