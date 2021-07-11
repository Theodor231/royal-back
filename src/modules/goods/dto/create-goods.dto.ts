
import { Length } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateGoodsDto {
    @ApiProperty({ example: 'Goods', description: 'goods name' })
    @Length(2, 100)
    name: string;

    @ApiProperty({ example: 'Image', description: 'category image' })
    image: any;
}
