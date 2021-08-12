import { Injectable } from '@nestjs/common';
import { CreateCategoriesDto } from './dto/create-categories.dto';
import { UpdateCategoriesDto } from './dto/update-categories.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { ILike, Repository } from 'typeorm';
import { Categories } from './entities/categories.entity';
import { LocalizationService } from '../../services/localization.service';

@Injectable()
export class CategoriesService {
  constructor(
    @InjectRepository(Categories)
    private repository: Repository<Categories>,
    private languageService: LocalizationService,
  ) {}
  create(createCategoriesDto: CreateCategoriesDto) {
    const categories = this.repository.create(createCategoriesDto);
    return this.repository.save(categories);
  }

  findOne(id: number) {
    return this.repository.findOne(id);
  }

  async list() {
    const items = await this.repository.find();
    return items.map((item: any) => ({
      value: item.id,
      text: item[`name_${this.languageService.activeLanguage}`],
    }));
  }

  findOnePublic(id: number) {
    return this.repository.findOne(id);
  }

  async findAll(query): Promise<any> {
    const take = query.per_page || 10;
    const skip = (Number(query.page) - 1) * take || 0;

    const where = {} as any;
    const filter = JSON.parse(query.filter);

    if (filter.name_ro) {
      where.name_ro = ILike(`%${filter.name_ro.toLowerCase()}%`);
    }

    if (filter.name_en) {
      where.name_en = ILike(`%${filter.name_en.toLowerCase()}%`);
    }

    if (filter.name_ru) {
      where.name_ru = ILike(`%${filter.name_ru.toLowerCase()}%`);
    }

    const [result, total] = await this.repository.findAndCount({
      take: take,
      skip: skip,
      where,
    });

    const headers = [
      { value: 'id', text: 'ID' },
      { value: 'name_ro', text: 'Name RO' },
      { value: 'name_en', text: 'Name EN' },
      { value: 'name_ru', text: 'Name RU' },
      { value: 'image', text: 'Image' },
    ];

    return {
      headers,
      total,
      items: result,
      page: query.page,
    };
  }

  async findAllPublic(query): Promise<any> {
    const take = query.per_page || 10;
    const skip = (Number(query.page) - 1) * take || 0;

    const where = {} as any;
    const filter = JSON.parse(query.filter);

    if (filter.name_ro) {
      where.name_ro = ILike(`%${filter.name_ro.toLowerCase()}%`);
    }

    if (filter.name_en) {
      where.name_en = ILike(`%${filter.name_en.toLowerCase()}%`);
    }

    if (filter.name_ru) {
      where.name_ru = ILike(`%${filter.name_ru.toLowerCase()}%`);
    }

    const [result, total] = await this.repository.findAndCount({
      take: take,
      skip: skip,
      where,
    });

    const headers = [
      { value: 'id', text: 'ID' },
      { value: 'name_ro', text: 'Name RO' },
      { value: 'name_en', text: 'Name EN' },
      { value: 'name_ru', text: 'Name RU' },
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
    await this.repository.findOne(+id);
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
