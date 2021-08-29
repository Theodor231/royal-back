import { BadRequestException, Injectable } from '@nestjs/common';
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
    try {
      const item = await this.repository.findOne(id);

      // const [items] = await this.repository.findAndCount({
      //   take: 5,
      //   where: { categoryId: item.categoryId, id: Not(Equal(item.id)) },
      // });

      const items = await this.repository
        .createQueryBuilder()
        .select([
          `goods.name_${this.localizationService.activeLanguage}`,
          'goods.id',
          'goods.price',
          'goods.discount',
          'goods.category',
        ])
        .from(Goods, 'goods')
        .where(`goods.categoryId=${item.categoryId}`)
        .orderBy('RANDOM()')
        .limit(5)
        .getMany();

      return {
        items,
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
    } catch (e) {
      throw new BadRequestException(e);
    }
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
      page: Number(query.page) | 1,
    };
  }

  async findAll(query): Promise<any> {
    let order = { id: 1 } as any;
    const take = Number(query.per_page) || 10;
    const skip = (Number(query.page) - 1) * take || 0;

    const where = {} as any;
    let filter = {} as any;

    if (query.filter) {
      filter = JSON.parse(query.filter);

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

    if (query.order) {
      order = JSON.parse(query.order);
    }

    const [result, total] = await this.repository.findAndCount({
      take: take,
      skip: skip,
      where,
      order,
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
