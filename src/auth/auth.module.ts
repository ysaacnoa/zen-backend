import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from './jwt.strategy';
import { AuthController } from './auth.controller';
import { GamificationModule } from '../gamification/gamification.module';

@Module({
  imports: [
    PassportModule,
    JwtModule.register({
      secret: process.env.SUPABASE_JWT_SECRET,
      signOptions: { expiresIn: '1d' },
    }),
    GamificationModule,
  ],
  providers: [AuthService, JwtStrategy],
  controllers: [AuthController],
})
export class AuthModule {}
