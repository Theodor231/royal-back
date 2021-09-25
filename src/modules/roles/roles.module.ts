import { Module } from '@nestjs/common';
import { RolesService } from './roles.service';
import { RolesController } from './roles.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Role } from './entities/role.entity';
import { LocalizationModule } from 'src/services/localization.module';

@Module({
  imports: [TypeOrmModule.forFeature([Role]), LocalizationModule],
  controllers: [RolesController],
  providers: [RolesService],
})
export class RolesModule {}
