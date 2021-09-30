import { MiddlewareConsumer, Module } from '@nestjs/common';
import { LocalizationService } from 'src/services/localization.service';
import { SettingsMiddleware } from 'src/middleware/settings.middleware';

@Module({
  imports: [LocalizationService],
  providers: [LocalizationService],
  exports: [LocalizationService],
})
export class LocalizationModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(SettingsMiddleware).forRoutes('*');
  }
}
