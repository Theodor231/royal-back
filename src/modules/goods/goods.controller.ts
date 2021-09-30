import {
  Controller,
  Get,
  Param,
  Query,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { GoodsService } from './goods.service';
import { Pagination } from 'nestjs-typeorm-paginate';
import { Goods } from './entities/goods.entity';
import { ModelController } from 'src/models/model.controller';

@Controller('goods')
export class GoodsController extends ModelController {
  constructor(private readonly goodsService: GoodsService) {
    super(goodsService, Goods);
  }

  @Get('public/:categoryId')
  async findAllPublic(
    @Param('categoryId') categoryId,
    @Query() query,
  ): Promise<Pagination<Goods>> {
    return this.goodsService.findAllPublic(categoryId, query);
  }

  @Get('public/:id/show')
  findOnePublic(@Param('id') id: string) {
    return this.goodsService.findOnePublic(+id)
  }
}
