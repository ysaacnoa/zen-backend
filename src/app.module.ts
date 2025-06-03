import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { GamificationModule } from './gamification/gamification.module';

@Module({
  imports: [AuthModule, GamificationModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
