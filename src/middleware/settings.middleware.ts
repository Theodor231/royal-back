import { Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction } from 'express';
import { LocalizationService } from 'src/services/localization.service';

@Injectable()
export class SettingsMiddleware implements NestMiddleware {
  constructor(private languageService: LocalizationService) {}

  async use(req: any, res: Response, next: NextFunction) {
    this.languageService.activeLanguage = req.headers['x-localization'] || 'en';
    next();
  }
}
