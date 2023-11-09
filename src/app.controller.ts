import { Controller, Get } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('Home')
@Controller()
export class AppController {
  @Get()
  @ApiOperation({ summary: 'Welcome' })
  async home(): Promise<any> {
    return 'Welcome to SendIT Parcel Delivery App!';
  }
}
