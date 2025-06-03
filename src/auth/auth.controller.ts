import { Controller, Post, Headers } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async login(@Headers('authorization') authHeader: string) {
    const token = authHeader?.split('Bearer ')[1];
    return this.authService.validateToken(token);
  }
}
