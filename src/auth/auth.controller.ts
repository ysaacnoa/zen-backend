import {
  Controller,
  Post,
  Headers,
  Body,
  UnauthorizedException,
} from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async login(@Headers('authorization') authHeader: string) {
    const token = authHeader?.split('Bearer ')[1];
    return this.authService.validateToken(token);
  }

  @Post('register')
  async register(@Body() userData: { email: string; password: string }) {
    try {
      return await this.authService.register(userData.email, userData.password);
    } catch (error) {
      console.debug(error);
      throw new UnauthorizedException('Registration failed');
    }
  }
}
