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
import { ConfigModule } from '@nestjs/config';
import { GoodsModule } from './modules/goods/goods.module';
import { CategoriesModule } from './modules/categories/categories.module';
import { SettingsMiddleware } from './middleware/settings.middleware';
import { LocalizationModule } from './services/localization.module';
import { LocalizationService } from "./services/localization.service";

@Module({
  imports: [
    ConfigModule.forRoot(),
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
    GoodsModule,
    CategoriesModule,
    LocalizationModule,
  ],
  controllers: [AppController],
  providers: [AppService, LocalizationService],
  exports: [],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(AuthMiddleware)
      .exclude('auth/(.*)', 'storage/(.*)', '(.*)/public/(.*)', '(.*)/public')
      .forRoutes('*');
  }
}
