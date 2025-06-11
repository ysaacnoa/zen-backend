import { Module } from '@nestjs/common';
import { LevelService } from './level.service';
import { WebSocketGateway } from '@nestjs/websockets';
import { UserModule } from '../../user/user.module';
import { BadgeModule } from '../badge/badge.module';

@Module({
  imports: [UserModule, BadgeModule],
  providers: [LevelService],
  exports: [LevelService],
})
@WebSocketGateway({
  cors: {
    origin: '*',
    methods: ['GET', 'POST'],
  },
})
export class LevelModule {}
