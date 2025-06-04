import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { IaModule } from './ia/ia.module';
import { AuthModule } from './auth/auth.module';
import { GamificationModule } from './gamification/gamification.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [IaModule, AuthModule, GamificationModule, UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
