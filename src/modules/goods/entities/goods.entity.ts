import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { Categories } from 'src/modules/categories/entities/categories.entity';

@Entity({ name: 'goods' })
export class Goods {
  @ApiProperty({ example: '1', description: 'Goods description' })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({ example: 'Categories', description: 'Categories description' })
  @Column()
  name_ro: string;

  @ApiProperty({ example: 'Categories', description: 'Categories description' })
  @Column()
  name_en: string;

  @ApiProperty({ example: 'Categories', description: 'Categories description' })
  @Column()
  name_ru: string;

  @ApiProperty({ example: 'File(binary)', description: 'Image' })
  @Column({
    type: 'jsonb',
    array: false,
    default: () => "'{}'",
    nullable: true,
  })
  image: any;

  @ApiProperty({ example: '123', description: 'Goods price' })
  @Column()
  price: number;

  @ApiProperty({ example: '12', description: 'Goods discount' })
  @Column({ default: 0, nullable: true })
  discount: number;

  @ApiProperty({ example: '12', description: 'Goods height' })
  @Column()
  height: number;

  @ApiProperty({ example: '12', description: 'Goods width' })
  @Column()
  width: number;

  @ApiProperty({ example: '12', description: 'Goods length' })
  @Column()
  length: number;

  @ApiProperty({ example: '12', description: 'Goods description_ro' })
  @Column()
  description_ro: string;

  @ApiProperty({ example: '12', description: 'Goods description_en' })
  @Column()
  description_en: string;

  @ApiProperty({ example: '12', description: 'Goods description_ru' })
  @Column()
  description_ru: string;

  @ApiProperty({ example: '1', description: 'Категория' })
  @ManyToOne(() => Categories, { eager: true })
  @JoinColumn()
  category: Categories;

  @Column({ nullable: true })
  categoryId: number;
}
