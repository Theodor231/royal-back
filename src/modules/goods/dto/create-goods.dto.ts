import { Length } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateGoodsDto {
  @ApiProperty({ example: 'name_ro', description: 'categories name ro' })
  @Length(2, 100)
  name_ro: string;

  @ApiProperty({ example: 'name_en', description: 'categories name ro' })
  @Length(2, 100)
  name_en: string;

  @ApiProperty({ example: 'name_ru', description: 'categories name ro' })
  @Length(2, 100)
  name_ru: string;

  @ApiProperty({ example: 'Image', description: 'category image' })
  image: any;

  @ApiProperty({ example: 'discount', description: 'category image' })
  discount: number;

  @ApiProperty({ example: 'price', description: 'category image' })
  price: number;

  @ApiProperty({ example: 'height', description: 'category image' })
  height: number;

  @ApiProperty({ example: 'width', description: 'category image' })
  width: number;

  @ApiProperty({ example: 'length', description: 'category image' })
  length: number;

  @Length(10, 2000)
  @ApiProperty({
    example: 'description_ro',
    description: 'category description_ro',
  })
  description_ro: string;

  @Length(10, 2000)
  @ApiProperty({
    example: 'description_ro',
    description: 'category description_en',
  })
  description_en: string;

  @Length(10, 2000)
  @ApiProperty({
    example: 'description_ro',
    description: 'category description_ru',
  })
  description_ru: string;
}
