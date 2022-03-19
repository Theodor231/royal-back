import { NestFactory, Reflector } from '@nestjs/core';
import { AppModule } from './app.module';
import * as express from 'express';
import { join } from 'path';
import * as bodyParser from 'body-parser';
import { AuthGuard } from './guards/auth.guard';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: ['error', 'warn'],
  });
  app.use(bodyParser.json({ limit: '50mb' }));
  app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

  app.enableCors();
  app.use(express.static(join(process.cwd(), '../storage/')));
  const reflector = app.get(Reflector);
  app.useGlobalGuards(new AuthGuard(reflector));

  const config = new DocumentBuilder()
    .setTitle('Api test')
    .setDescription('Test Desription')
    .setVersion('1.0')
    .addTag('online')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api/docs', app, document);

  const PORT = process.env.port || 3000;

  console.log(`Server listen on http://localhost:${PORT}`);
  await app.listen(PORT);
}
bootstrap().then((r) => r);
