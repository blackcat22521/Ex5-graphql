import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { GraphqlExceptionFilter } from './common/filter/graphql-exception.filter';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );
  app.useGlobalFilters(new GraphqlExceptionFilter());

  await app.listen(3000);
  console.log('Server is running on http://localhost:3000');
}
bootstrap();
