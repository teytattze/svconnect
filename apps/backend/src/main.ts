import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

import { AppModule } from './AppModule';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const globalPrefix = AppModule.PREFIX;
  const hostname = AppModule.HOSTNAME;
  const port = AppModule.PORT;

  app.setGlobalPrefix(globalPrefix);

  await app.listen(port);

  Logger.log(
    `Application is running on: http://${hostname}:${port}/${globalPrefix}`,
  );
}

bootstrap();
