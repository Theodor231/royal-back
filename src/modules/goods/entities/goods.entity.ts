import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity({ name: 'goods' })
export class Goods {
  @ApiProperty({ example: '1', description: 'Goods description' })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({ example: 'Goods', description: 'Goods description' })
  @Column()
  name: string;

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
  @Column()
  discount: number;


}