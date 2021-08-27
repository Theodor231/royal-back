import Faker from 'faker';
import { define } from 'typeorm-seeding';
import { Categories } from '../entities/categories.entity';

define(Categories, (faker: typeof Faker) => {
  const name = faker.name.jobTitle();

  const item = new Categories();
  item.name_en = `${name} EN`;
  item.name_ro = `${name} RO`;
  item.name_ru = `${name} RU`;
  item.image = {
    url: faker.image.imageUrl(500, 500, 'technics', true),
    name: faker.name.firstName(),
  };
  return item;
});
