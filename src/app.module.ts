import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { IaModule } from './ia/ia.module';
import { AuthModule } from './auth/auth.module';
import { GamificationModule } from './gamification/gamification.module';
import { UserModule } from './user/user.module';
import { AnalyticsModule } from './analytics/analytics.module';

@Module({
  imports: [
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
