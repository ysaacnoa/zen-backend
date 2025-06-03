import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async login(@Body() credentials: { email: string; password: string }) {
    return await this.authService.login(
      credentials.email,
      credentials.password,
    );
  }

  @Post('register')
  async register(
    @Body()
    userData: {
      email: string;
      password: string;
      firstName: string;
      lastName: string;
      avatarUrl?: string;
    },
  ) {
    return await this.authService.register(
      userData.email,
      userData.password,
      userData.firstName,
      userData.lastName,
      userData.avatarUrl,
    );
  }
}
