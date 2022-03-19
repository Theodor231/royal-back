import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ILike, Repository } from 'typeorm';
import { Categories } from './entities/categories.entity';
import { LocalizationService } from '../../services/localization.service';
import { APIModel } from 'src/models/api-model.service';
import { CreateCategoriesDto } from './dto/create-categories.dto';
import { UpdateCategoriesDto } from './dto/update-categories.dto';

@Injectable()
export class CategoriesService extends APIModel {
  headers = [
    { value: 'id', text: 'ID', sortable: true },
    { value: 'name_ro', text: 'Name RO', sortable: true },
    { value: 'name_en', text: 'Name EN', sortable: true },
    { value: 'name_ru', text: 'Name RU', sortable: true },
    { value: 'image', text: 'Image', sortable: false },
  ] as Array<{ value: string; text: string; sortable: boolean }>;

  allowedFilters = {
    name_ro: {
      type: 'string',
    },
    name_en: {
      type: 'string',
    },
    name_ru: {
      type: 'string',
    },
  } as any;

  constructor(
    @InjectRepository(Categories)
    public repository: Repository<Categories>,
    public languageService: LocalizationService,
  ) {
    super(repository, languageService);
    this.createDto = CreateCategoriesDto;
    this.updateDto = UpdateCategoriesDto;
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
}
