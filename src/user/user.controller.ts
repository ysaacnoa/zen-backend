import {
  Controller,
  Get,
  Headers,
  UnauthorizedException,
} from '@nestjs/common';
import { AuthService } from '../auth/auth.service';
import { UserService } from './user.service';
import type { UserProfile } from './user.service';

@Controller('user')
export class UserController {
  constructor(
    private readonly authService: AuthService,
    private readonly userService: UserService,
  ) {}

  @Get('me')
  async getCurrentUser(
    @Headers('authorization') authHeader: string,
  ): Promise<UserProfile> {
    if (!authHeader) {
      throw new UnauthorizedException('Authorization header missing');
    }

    const token = authHeader.replace('Bearer ', '');
    console.log('Received token:', token); // Log del token recibido
    try {
      const { user } = await this.authService.validateToken(token);
      console.log('Validated user:', user); // Log del usuario validado
      return this.userService.getUserById(user.sub);
    } catch (error) {
      console.error('Token validation error:', error);
      throw error;
    }
  }
}
