import { Connection } from 'typeorm';
import { Seeder, Factory } from 'typeorm-seeding';
import { User } from 'src/modules/users/entities/user.entity';
import axios from 'axios';

export default class CreateUsers implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<any> {
    try {
      await factory(User)().create({
        name: 'Admin',
        email: 'admin@gmail.com',
        password: '12345678',
        roleId: 1,
      });
    } catch (e) {
      console.log(e);
    }

    for (let i = 1; i < 10; i++) {
      await factory(User)().create({
        avatar: { url: await this.getImage() },
      });
    }
  }

  async getImage() {
    const response = await axios.get('https://picsum.photos/200');
    return response.request['_redirectable']['_currentUrl'];
  }
}
