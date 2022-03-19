import { Connection } from 'typeorm';
import { Seeder, Factory } from 'typeorm-seeding';
import { Goods } from '../entities/goods.entity';
import axios from 'axios';

export default class CreateGoods implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<any> {
    for (let i = 1; i < 100; i++) {
      await factory(Goods)().create({
        image: { url: await this.getImage() },
      });
    }
  }

  async getImage() {
    const response = await axios.get('https://picsum.photos/300');
    return response.request['_redirectable']['_currentUrl'];
  }
}
