import { Length } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateCategoriesDto {
  @ApiProperty({ example: 'Categories', description: 'categories name ro' })
  @Length(2, 100)
  name_ro: string;

  @ApiProperty({ example: 'Categories', description: 'categories name ro' })
  @Length(2, 100)
  name_en: string;

  @ApiProperty({ example: 'Categories', description: 'categories name ro' })
  @Length(2, 100)
  name_ru: string;

  @ApiProperty({ example: 'Image', description: 'category image' })
  image: any;
}
