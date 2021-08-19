import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {ValidationPipe} from '@nestjs/common'

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      /**
       * make sure that any extra properties that we send along
       * with the request will be stripped out for us automatically
       */
      whitelist: true 
    })
  )
  await app.listen(3000);
}
bootstrap();
