import { NestFactory } from '@nestjs/core';
import { ConfigService } from '@nestjs/config';
import { SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { swaggerConfig } from './coonfigurations';

let port;
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);

  const document = SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup('api', app, document);

  port = <number>configService.get('port') || 8080;
  await app.listen(port);
}
bootstrap()
  .then(() => console.log(`Application up ans running on port: ${port}`))
  .catch((err) => console.error(`Application failed to start: ${err}`));
