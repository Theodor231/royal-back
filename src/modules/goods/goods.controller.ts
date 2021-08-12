import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
  UploadedFile,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { GoodsService } from './goods.service';
import { CreateGoodsDto } from './dto/create-goods.dto';
import { UpdateGoodsDto } from './dto/update-goods.dto';
import { Pagination } from 'nestjs-typeorm-paginate';
import { Goods } from './entities/goods.entity';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { SaveFile } from 'src/helpers/decorators';

@ApiTags('Goods')
@Controller('goods')
export class GoodsController {
  constructor(private readonly goodsService: GoodsService) {}

  @ApiOperation({ summary: 'create goods' })
  @ApiResponse({ status: 201, type: Goods })
  @Post()
  @SaveFile('image', 'goods')
  async create(@UploadedFile() file, @Body() createGoodsDto: CreateGoodsDto) {
    if (file) {
      createGoodsDto.image = {
        ...file,
        url: `${process.env.server_url}/${file.path}`,
      };
    }
    return await this.goodsService.create(createGoodsDto).catch((err) => {
      throw new HttpException(
        {
          message: err.message,
          error: err,
        },
        HttpStatus.BAD_REQUEST,
      );
    });
  }

  @ApiOperation({ summary: 'Get all goods' })
  @ApiResponse({ status: 200, type: [Goods] })
  @Get()
  async findAll(@Query() query): Promise<Pagination<Goods>> {
    return await this.goodsService.findAll(query);
  }
  @ApiOperation({ summary: 'Get all goods' })
  @ApiResponse({ status: 200, type: [Goods] })
  @Get('public/:categoryId')
  async findAllPublic(
    @Param('categoryId') categoryId,
    @Query() query,
  ): Promise<Pagination<Goods>> {
    return this.goodsService.findAllPublic(categoryId, query);
  }

  @ApiOperation({ summary: 'Get goods' })
  @ApiResponse({ status: 200, type: Goods })
  @Get('public/:id/show')
  findOnePublic(@Param('id') id: string) {
    return this.goodsService.findOnePublic(+id).catch((err) => {
      throw new HttpException(
        {
          message: err.message,
          error: err,
        },
        HttpStatus.BAD_REQUEST,
      );
    });
  }

  @ApiOperation({ summary: 'Get goods' })
  @ApiResponse({ status: 200, type: Goods })
  @Get(':id/edit')
  findOne(@Param('id') id: string) {
    return this.goodsService.findOne(+id).catch((err) => {
      throw new HttpException(
        {
          message: err.message,
          error: err,
        },
        HttpStatus.BAD_REQUEST,
      );
    });
  }

  @ApiOperation({ summary: 'Update goods' })
  @ApiResponse({ status: 200, type: Goods })
  @Patch(':id')
  @SaveFile('image', 'goods')
  async update(
    @UploadedFile() file,
    @Param('id') id: string,
    @Body() updateGoodsDto: UpdateGoodsDto,
  ) {
    if (file) {
      updateGoodsDto.image = {
        ...file,
        url: `${process.env.server_url}/${file.path}`,
      };
    }
    return this.goodsService.update(+id, updateGoodsDto).catch((err) => {
      throw new HttpException(
        {
          message: err.message,
          error: err,
        },
        HttpStatus.BAD_REQUEST,
      );
    });
  }

  @ApiOperation({ summary: 'Remove goods' })
  @ApiResponse({ status: 200, type: Goods })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.goodsService.remove(+id).catch((err) => {
      throw new HttpException(
        {
          message: err.message,
          error: err,
        },
        HttpStatus.BAD_REQUEST,
      );
    });
  }
}
