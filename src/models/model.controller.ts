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
import { Pagination } from 'nestjs-typeorm-paginate';
import { SaveFile } from '../helpers/decorators';
import { Entity } from 'typeorm';
import { CreateCategoriesDto } from "../modules/categories/dto/create-categories.dto";


let componentOptions = {
  filePath: 'public',
  fileKey: 'image',
  entity: Entity,
  createDto: {} as any,
  updateDto: {} as any,
} as any;
@Controller('categories')
export class ModelController {
  service;
  settings = {} as any;
  createDto;
  constructor(service: any, settings: any) {
    this.service = service;
    componentOptions = { ...settings };
    console.log(typeof this.createDto, this.createDto);
    console.log(typeof componentOptions.type);
  }

  @Post()
  @SaveFile(componentOptions.fileKey, componentOptions.filePath)
  async create(@Body() payload: CreateCategoriesDto, @UploadedFile() file?) {
    if (file) {
      payload.image = {
        ...file,
        url: `${process.env.server_url}/${file.path}`,
      };
    }
    return await this.service.create(payload).catch((err) => {
      throw new HttpException(
        {
          message: err.message,
          error: err,
        },
        HttpStatus.BAD_REQUEST,
      );
    });
  }

  @Get()
  async findAll(@Query() query): Promise<Pagination<any>> {
    return this.service.findAll(query);
  }

  @Get(':id/edit')
  findOne(@Param('id') id: string) {
    return this.service.findOne(+id);
  }

  @Get('list')
  list() {
    return this.service.list();
  }

  @Patch(':id')
  @SaveFile(componentOptions.fileKey, componentOptions.filePath)
  async update(
    @Param('id') id: string,
    @Body() updateGoodsDto: any,
    @UploadedFile() file?,
  ) {
    if (file) {
      updateGoodsDto.image = {
        ...file,
        url: `${process.env.server_url}/${file.path}`,
      };
    }
    return this.service.update(+id, updateGoodsDto).catch((err) => {
      throw new HttpException(
        {
          message: err.message,
          error: err,
        },
        HttpStatus.BAD_REQUEST,
      );
    });
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.service.remove(+id);
  }
}
