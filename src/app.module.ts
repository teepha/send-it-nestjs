import { MiddlewareConsumer, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { ParcelsController } from './parcels-modules/parcels.controller';
import { defaultConfiguration, envVariablesValidationSchema } from './coonfigurations';
import { ClsMiddleware, ClsModule } from 'nestjs-cls';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      ignoreEnvFile: true,
      validationSchema: envVariablesValidationSchema,
      validationOptions: {
        allowUnknown: true,
      },
      load: [defaultConfiguration],
      cache: true,
    }),
    ClsModule.forRoot({
      global: true,
      middleware: { mount: true },
    }),
  ],
  controllers: [AppController, ParcelsController],
})

export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(ClsMiddleware).forRoutes('*');
  }
}
