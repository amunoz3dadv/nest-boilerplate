import { Module } from '@nestjs/common';
import { LoggerModule } from 'nestjs-pino';
import { v4 as uuid } from 'uuid';
import { LogtestModule } from './logtest/logtest.module';

@Module({
  imports: [
    LoggerModule.forRoot({
      pinoHttp: {
        genReqId: (request) => request.headers['x-correlation-id'] ?? uuid(),
        transport: { target: 'pino-pretty' },
      },
    }),
    LogtestModule,
  ],
})
export class AppModule {}
