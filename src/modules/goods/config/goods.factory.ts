import Faker from 'faker';
import { define } from 'typeorm-seeding';
import { Goods } from '../entities/goods.entity';

define(Goods, (faker: typeof Faker) => {
  const item = new Goods();
  const name = faker.commerce.productName();
  const description = faker.lorem.text(100);

  item.name_en = `${name} EN`;
  item.name_ro = `${name} RO`;
  item.name_ru = `${name} RU`;

  item.description_en = `${description} EN`;
  item.description_ro = `${description} RO`;
  item.description_ru = `${description} RU`;

  item.price = Math.floor(Math.random() * 5000);
  item.height = Math.floor(Math.random() * 400);
  item.width = Math.floor(Math.random() * 400);
  item.length = Math.floor(Math.random() * 400);
  item.categoryId = Math.floor(Math.random() * 10 + 1);

  item.image = {
    url: faker.image.imageUrl(500, 500, 'technics', true),
    name: faker.name.firstName(),
  };
  return item;
});
