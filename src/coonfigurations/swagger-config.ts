import { DocumentBuilder } from '@nestjs/swagger';
import { name, description, version } from '../../package.json';

export const swaggerConfig = new DocumentBuilder()
  .setTitle(name)
  .setDescription(description)
  .setVersion(version)
  .build();
