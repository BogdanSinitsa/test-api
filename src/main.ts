import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import * as requestIp from 'request-ip';
import * as dotenv from 'dotenv';
import { AppModule } from './app.module';

dotenv.config();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  app.use(requestIp.mw());
  app.useGlobalPipes(new ValidationPipe({
    transform: true,
  }));
  await app.listen(process.env.PORT);
}
bootstrap();

console.log(process.env.PORT);
