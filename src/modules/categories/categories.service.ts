import { Injectable } from '@nestjs/common';
import { CreateCategoriesDto } from './dto/create-categories.dto';
import { UpdateCategoriesDto } from './dto/update-categories.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { ILike, Repository } from 'typeorm';
import { Categories } from './entities/categories.entity';

@Injectable()
export class CategoriesService {
  constructor(
    @InjectRepository(Categories)
    private repository: Repository<Categories>,
  ) { }
  create(createCategoriesDto: CreateCategoriesDto) {
    const categories = this.repository.create(createCategoriesDto);
    return this.repository.save(categories);
  }

  findOne(id: number) {
    return this.repository.findOne(id);
  }

  async findAll(query): Promise<any> {
    const take = query.per_page || 10;
    const skip = (Number(query.page) - 1) * take || 0;
   
    const where = {} as any;
    const filter = JSON.parse(query.filter);

    if (filter.name) {
      where.name = ILike(`%${filter.name.toLowerCase()}%`);
    }

    const [result, total] = await this.repository.findAndCount({
      take: take,
      skip: skip,
      where
    });

    const headers = [
      { value: 'id', text: 'ID' },
      { value: 'name', text: 'Name' },
      { value: 'image', text: 'Image' },
    ];

    return {
      headers,
      total,
      items: result,
      page: query.page,
    };
  }

  async update(id: number, updateCategoriesDto: UpdateCategoriesDto) {
    const item: any = await this.repository.findOne(+id);
    await this.repository.update(
      +id,
      JSON.parse(JSON.stringify(updateCategoriesDto)),
    );
    return this.repository.findOne(id);
  }

  async remove(id: number) {
    return await this.repository.delete(id);
  }
}
