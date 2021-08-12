import { Injectable } from '@nestjs/common';
import { CreateGoodsDto } from './dto/create-goods.dto';
import { UpdateGoodsDto } from './dto/update-goods.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { ILike, Repository } from 'typeorm';
import { Goods } from './entities/goods.entity';

@Injectable()
export class GoodsService {
  constructor(
    @InjectRepository(Goods)
    private repository: Repository<Goods>,
  ) {}
  create(createGoodsDto: CreateGoodsDto) {
    const goods = this.repository.create(createGoodsDto);
    return this.repository.save(goods);
  }

  findOne(id: number) {
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
