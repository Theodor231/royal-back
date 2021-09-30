import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { APIModel } from 'src/models/api-model.service';
import { LocalizationService } from '../../services/localization.service';

@Injectable()
export class UsersService extends APIModel {
  headers = [
    { value: 'id', text: 'ID', sortable: true },
    { value: 'name', text: 'Name', sortable: true },
    { value: 'roleId', text: 'Role', sortable: true },
    { value: 'avatar', text: 'Avatar', sortable: true },
    { value: 'email', text: 'Email', sortable: true },
  ] as Array<{ value: string; text: string; sortable: boolean }>;
  allowedFilters = {
    email: {
      type: 'string',
    },
    name: {
      type: 'string',
    },
  } as any;

  constructor(
    @InjectRepository(User)
    public repository: Repository<User>,
    public localizationService: LocalizationService,
  ) {
    super(repository, localizationService);
  }
}
