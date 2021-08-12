import { Injectable } from '@nestjs/common';
import { CreateGoodsDto } from './dto/create-goods.dto';
import { UpdateGoodsDto } from './dto/update-goods.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { ILike, Repository } from 'typeorm';
import { Goods } from './entities/goods.entity';
import { LocalizationService } from '../../services/localization.service';

@Injectable()
export class GoodsService {
  constructor(
    @InjectRepository(Goods)
    private repository: Repository<Goods>,
    private localizationService: LocalizationService,
  ) {}
  create(createGoodsDto: CreateGoodsDto) {
    const goods = this.repository.create(createGoodsDto);
    return this.repository.save(goods);
  }

  findOne(id: number) {
    return this.repository.findOne(id);
  }

  async findOnePublic(id: number): Promise<any> {
    const item = await this.repository.findOne(id);
    return {
      name: item[`name_${this.localizationService.activeLanguage}`],
      description:
        item[`description_${this.localizationService.activeLanguage}`],
      price: item.price,
      discount: item.discount,
      width: item.width,
      height: item.height,
      length: item.length,
      categoryId: item.categoryId,
      image_url: item.image.url,
    };
  }

  async findAllPublic(categoryId, query): Promise<any> {
    const take = query.per_page || 10;
    const skip = (Number(query.page) - 1) * take || 0;

    const where = { categoryId } as any;

    if (query.filter) {
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
    }

    const [result, total] = await this.repository.findAndCount({
      take: take,
      skip: skip,
      where,
    });

    return {
      total,
      items: result.map((item: any) => ({
        name: item[`name_${this.localizationService.activeLanguage}`],
        price: item.price,
        discount: item.discount,
        width: item.width,
        height: item.height,
        length: item.length,
        categoryId: item.categoryId,
        image_url: item.image.url,
        id: item.id,
      })),
      page: query.page,
    };
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
      { value: 'price', text: 'Price' },
      { value: 'discount', text: 'Discount' },
    ];

    return {
      headers,
      total,
      items: result,
      page: query.page,
    };
  }

  async update(id: number, updateGoodsDto: UpdateGoodsDto) {
    await this.repository.findOne(+id);
    await this.repository.update(
      +id,
      JSON.parse(JSON.stringify(updateGoodsDto)),
    );
    return this.repository.findOne(id);
  }

  async remove(id: number) {
    return await this.repository.delete(id);
  }
}
