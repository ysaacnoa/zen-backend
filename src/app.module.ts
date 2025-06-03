import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { GamificationModule } from './gamification/gamification.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [AuthModule, GamificationModule, UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
