import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { setupAsyncApi } from './setup-asyncapi';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const printAsyncApiLog = await setupAsyncApi(app)
  printAsyncApiLog?.()
  await app.listen(3000);
}
bootstrap();
