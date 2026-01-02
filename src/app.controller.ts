import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  @Get('api')
  status() {
    return { status: 'API em execução' };
  }
}
