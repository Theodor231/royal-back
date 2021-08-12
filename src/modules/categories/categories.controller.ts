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
} from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { CreateCategoriesDto } from './dto/create-categories.dto';
import { UpdateCategoriesDto } from './dto/update-categories.dto';
import { Pagination } from 'nestjs-typeorm-paginate';
import { Categories } from './entities/categories.entity';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Public, SaveFile } from 'src/helpers/decorators';

@ApiTags('Categories')
@Controller('categories')
export class CategoriesController {
  constructor(private readonly categoriesService: CategoriesService) {}

  @ApiOperation({ summary: 'create categories' })
  @ApiResponse({ status: 201, type: Categories })
  @Post()
  @SaveFile('image', 'categories')
  create(
    @UploadedFile() file,
    @Body() createCategoriesDto: CreateCategoriesDto,
  ) {
    if (file) {
      createCategoriesDto.image = {
        ...file,
        url: `${process.env.server_url}/${file.path}`,
      };
    }
    return this.categoriesService.create(createCategoriesDto);
  }

  @ApiOperation({ summary: 'Get all categories' })
  @ApiResponse({ status: 200, type: [Categories] })
  @Get()
  async findAll(@Query() query): Promise<Pagination<Categories>> {
    return this.categoriesService.findAll(query);
  }

  @ApiOperation({ summary: 'Get all  public categories' })
  @ApiResponse({ status: 200, type: [Categories] })
  @Get('public')
  @Public()
  async findAllPublic(@Query() query): Promise<Pagination<Categories>> {
    return this.categoriesService.findAllPublic(query);
  }

  @ApiOperation({ summary: 'Get categories' })
  @ApiResponse({ status: 200, type: Categories })
  @Get(':id/edit')
  findOne(@Param('id') id: string) {
    return this.categoriesService.findOne(+id);
  }

  @ApiOperation({ summary: 'Get categories' })
  @ApiResponse({ status: 200, type: Categories })
  @Get('public/:id/edit')
  @Public()
  findOnePublic(@Param('id') id: string) {
    return this.categoriesService.findOnePublic(+id);
  }

  @ApiOperation({ summary: 'Get categories' })
  @ApiResponse({ status: 200, type: Categories })
  @Get('public/list')
  @Public()
  list() {
    return this.categoriesService.list();
  }

  @ApiOperation({ summary: 'Update categories' })
  @ApiResponse({ status: 200, type: Categories })
  @Patch(':id')
  @SaveFile('image', 'categories')
  async update(
    @UploadedFile() file,
    @Param('id') id: string,
    @Body() updateCategoriesDto: UpdateCategoriesDto,
  ) {
    if (file) {
      updateCategoriesDto.image = {
        ...file,
        url: `${process.env.server_url}/${file.path}`,
      };
    }
    return this.categoriesService.update(+id, updateCategoriesDto);
  }

  @ApiOperation({ summary: 'Remove categories' })
  @ApiResponse({ status: 200, type: Categories })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.categoriesService.remove(+id);
  }
}
