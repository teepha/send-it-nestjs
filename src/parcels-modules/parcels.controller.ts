import { Controller, Param, Get } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('Parcels')
@Controller('parcels')
export class ParcelsController {
  @Get(':id')
  @ApiOperation({ summary: 'Get a parcel delivery order' })
  getParcel(@Param('id') id: string): string {
    return `Parcel details for ${id}`;
  }
}
