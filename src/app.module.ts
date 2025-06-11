import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { IaModule } from './ia/ia.module';
import { AuthModule } from './auth/auth.module';
import { GamificationModule } from './gamification/gamification.module';
import { UserModule } from './user/user.module';
import { AnalyticsModule } from './analytics/analytics.module';
import { LevelModule } from './gamification/level/level.module';
import { AppController } from './app.controller';

@Module({
  imports: [
    LevelModule,
    IaModule,
    AuthModule,
    GamificationModule,
    UserModule,
    AnalyticsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
