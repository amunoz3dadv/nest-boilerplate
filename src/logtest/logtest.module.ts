import { Module } from '@nestjs/common';
import { LogtestService } from './logtest.service';
import { LogtestController } from './logtest.controller';

@Module({
  controllers: [LogtestController],
  providers: [LogtestService],
})
export class LogtestModule {}
