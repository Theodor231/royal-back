import { Connection } from 'typeorm';
import { Seeder, Factory } from 'typeorm-seeding';
import { Goods } from '../entities/goods.entity';

export default class CreateGoods implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<any> {
    await factory(Goods)().createMany(500);
  }
}
