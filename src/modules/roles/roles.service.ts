import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Role } from './entities/role.entity';
import { LocalizationService } from '../../services/localization.service';
import { APIModel } from '../../models/api-model.service';

@Injectable()
export class RolesService extends APIModel {
  headers = [
    { value: 'id', text: 'ID', sortable: true },
    { value: 'name', text: 'Name', sortable: true },
    { value: 'alias', text: 'Alias', sortable: true },
    { value: 'guard', text: 'Guard', sortable: true },
  ] as Array<{ value: string; text: string; sortable: boolean }>;

  allowedFilters = {
    name: {
      type: 'string',
    },
    alias: {
      type: 'string',
    },
    guard: {
      type: 'string',
    },
  } as any;

  constructor(
    @InjectRepository(Role)
    public repository: Repository<Role>,
    public localization: LocalizationService,
  ) {
    super(repository, localization);
  }
  async list() {
    try {
      const items = await this.repository.find();
      return items.map((item: any) => ({ value: item.id, text: item.alias }));
    } catch (e) {
      throw new InternalServerErrorException(e);
    }
  }
}
