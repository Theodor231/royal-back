import { MiddlewareConsumer, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RolesModule } from './modules/roles/roles.module';
import { UsersModule } from './modules/users/users.module';
import { AuthModule } from './modules/auth/auth.module';
import { AuthMiddleware } from './middleware/auth.middleware';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { PermisionsModule } from './modules/permisions/permisions.module';
import { PermissionsService } from './services/permissions.service';
import { LocalizationService } from './services/localization.service';
import { CategoriesModule } from './modules/categories/categories.module';
import { GoodsModule } from './modules/goods/goods.module';
import { SettingsMiddleware } from './middleware/settings.middleware';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    RolesModule,
    UsersModule,
    AuthModule,

    PassportModule.register({
      defaultStrategy: 'jwt',
      property: 'user',
      session: true,
    }),
    JwtModule.register({
      secret: process.env.SECRETKEY,
      signOptions: {
        expiresIn: '30000s',
      },
    }),
    PermisionsModule,
    LocalizationService,
    CategoriesModule,
    GoodsModule,
  ],
  controllers: [AppController],
  providers: [AppService, PermissionsService, LocalizationService],
  exports: [LocalizationService],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(SettingsMiddleware)
      .forRoutes('*')
      .apply(AuthMiddleware)
      .exclude('auth/(.*)', 'storage/(.*)', '(.*)/public/(.*)')
      .forRoutes('*');
  }
}
