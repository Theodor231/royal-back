
import { Length } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateCategoriesDto {
    @ApiProperty({ example: 'Categories', description: 'categories name' })
    @Length(2, 100)
    name: string;

    @ApiProperty({ example: 'Image', description: 'category image' })
    image: any;
}
