import {
  Column,
  Entity,
  JoinTable,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { Goods } from '../../goods/entities/goods.entity';

@Entity({ name: 'categories' })
export class Categories {
  @ApiProperty({ example: '1', description: 'Categories description' })
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

  @ApiProperty({ example: 'File(binary)', description: 'Аватар' })
  @Column({
    type: 'jsonb',
    array: false,
    default: () => "'{}'",
    nullable: true,
  })
  image: any;

  @ApiProperty({ example: 'File(binary)', description: 'Аватар' })
  @ManyToOne(() => Goods)
  @JoinTable()
  products: any;
}
