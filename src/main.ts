import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Natural Disaster Tracker')
    .setDescription('Backend Documentation')
    .setVersion('2.0')
    .addTag('Weather data')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('weather', app, document);

  await app.listen(3000);
}
bootstrap();
