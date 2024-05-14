import { Controller, Get } from '@nestjs/common';
import { LogtestService } from './logtest.service';
import { Logger } from 'nestjs-pino';

@Controller('logtest')
export class LogtestController {
  constructor(
    private readonly logtestService: LogtestService,
    private readonly logger: Logger,
  ) {}

  @Get('')
  getHello() {
    this.logger.warn('mesaje test');
  }
}
