import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, ILike } from 'typeorm';
import { User } from './entities/user.entity';
import { deleteFile } from '../../helpers/files-utils';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private repository: Repository<User>,
  ) { }
  create(createUserDto: CreateUserDto) {
    const user = this.repository.create(createUserDto);
    return this.repository.save(user);
  }

  async findOne(id: number) {
    const user = await this.repository.findOne(id);
    delete user.password;
    return user;
  }

  async findAll(query): Promise<any> {
    const take = query.per_page || 10;
    const skip = (Number(query.page) - 1) * take || 0;

    const where = {} as any;
    const filter = JSON.parse(query.filter)

    if (filter.name) {
      where.name = ILike(`%${filter.name.toLowerCase()}%`);
    }

    if (filter.roleId) {
      where.roleId = filter.roleId;
    }

    if (filter.email) {
      where.email = ILike(`%${filter.email.toLowerCase()}%`);
    }

    const [result, total] = await this.repository.findAndCount({
      take: take,
      skip: skip,
      where
    });

    const headers = [
      { value: 'id', text: 'ID' },
      { value: 'name', text: 'Name' },
      { value: 'roleId', text: 'Role' },
      { value: 'avatar', text: 'Avatar' },
      { value: 'email', text: 'Email' },
    ];

    return {
      headers,
      total,
      items: result,
      page: query.page,
    };
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    const item: any = await this.repository.findOne(+id);
    if (item.avatar) {
      await deleteFile(item.avatar.path);
    }
    await this.repository.update(
      +id,
      JSON.parse(JSON.stringify(updateUserDto)),
    );
    return this.repository.findOne(id);
  }

  async remove(id: number) {
    const item: any = await this.repository.findOne(+id);
    if (item.avatar) {
      await deleteFile(item.avatar.path);
    }
    await this.repository.delete(id);
    return true;
  }
}
