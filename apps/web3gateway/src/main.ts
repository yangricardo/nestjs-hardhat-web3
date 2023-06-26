import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = new DocumentBuilder()
    .setTitle('WEB 3 EVM Gateway')
    .setDescription('WEB 3 EVM Gateway Base Project Template')
    .setVersion('1.0')
    .addTag('lock-smart-contract')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('/', app, document,{
    yamlDocumentUrl: '/openapi.yaml',
    jsonDocumentUrl: '/openapi.json',
    explorer: true,
  });
  await app.listen(3000);
}
bootstrap();
