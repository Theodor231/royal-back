import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
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
  async create(createCategoriesDto: CreateCategoriesDto) {
    try {
      const categories = await this.repository.create(createCategoriesDto);
      return this.repository.save(categories);
    } catch (e) {
      throw new InternalServerErrorException(e);
    }
  }

  async findOne(id: number) {
    try {
      return await this.repository.findOne(id);
    } catch (e) {
      throw new InternalServerErrorException(e);
    }
  }

  async list() {
    try {
      const items = await this.repository.find();
      return items.map((item: any) => ({
        value: item.id,
        text: item[`name_${this.languageService.activeLanguage}`],
      }));
    } catch (e) {
      throw new InternalServerErrorException(e);
    }
  }

  async publicList() {
    try {
      const items = await this.repository.find();
      return items.map((item: any) => ({
        value: item.id,
        text: item[`name_${this.languageService.activeLanguage}`],
        image_url: item.image.url,
      }));
    } catch (e) {
      throw new InternalServerErrorException(e);
    }
  }

  async findOnePublic(id: number) {
    try {
      return await this.repository.findOne(id);
    } catch (e) {
      throw new NotFoundException(e);
    }
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
    try {
      const take = query.per_page || 10;
      const skip = (Number(query.page) - 1) * take || 0;

      const where = {} as any;
      let filter = {} as any;

      if (query.filter) {
        filter = JSON.parse(query.filter);
      }

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
        items: result.map((item: any) => ({
          id: item.id,
          name: item[`name_${this.languageService.activeLanguage}`],
          image_url: item.image.url,
        })),
        page: query.page,
      };
    } catch (e) {
      throw new InternalServerErrorException(e);
    }
  }

  async update(id: number, updateCategoriesDto: UpdateCategoriesDto) {
    try {
      await this.repository.findOneOrFail(+id);
      await this.repository.update(
        +id,
        JSON.parse(JSON.stringify(updateCategoriesDto)),
      );
      return this.repository.findOne(id);
    } catch (e) {
      return new NotFoundException(e);
    }
  }

  async remove(id: number) {
    try {
      return await this.repository.delete(id);
    } catch (e) {
      throw new InternalServerErrorException(e);
    }
  }
}
