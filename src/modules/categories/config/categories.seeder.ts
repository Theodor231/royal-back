import { Connection } from 'typeorm';
import { Seeder, Factory } from 'typeorm-seeding';
import { Categories } from '../entities/categories.entity';

export default class CreateCategories implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<any> {
    await factory(Categories)().createMany(10);
  }
}
