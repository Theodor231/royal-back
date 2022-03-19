import { Connection } from 'typeorm';
import { Seeder, Factory } from 'typeorm-seeding';
import { Categories } from '../entities/categories.entity';
import axios from 'axios';

export default class CreateCategories implements Seeder {
  categories = [
    {
      name_ro: 'Panouri 3D',
      name_en: '3D Panels',
      name_ru: '3Д панэли',
    },
    {
      name_ro: 'Cornișe',
      name_en: 'cornices',
      name_ru: 'карнызы',
    },
    {
      name_ro: 'muluri',
      name_en: 'moldings',
      name_ru: 'молдинги',
    },
    {
      name_ro: 'seminee',
      name_en: 'fireplaces',
      name_ru: 'камины',
    },
    {
      name_ro: 'Coloane',
      name_en: 'Columns',
      name_ru: 'колонны',
    },
    {
      name_ro: 'tavane',
      name_en: 'ceilings',
      name_ru: 'потолки',
    },
    {
      name_ro: 'cărămizi',
      name_en: 'bricks',
      name_ru: 'кирпичи',
    },
    {
      name_ro: 'Tapete 3D',
      name_en: '3D carpet',
      name_ru: '3Д Обои',
    },
    {
      name_ro: 'vopsele',
      name_en: 'paints',
      name_ru: 'краски',
    },
    {
      name_ro: 'tencuieli',
      name_en: 'plaster',
      name_ru: 'штукатурки',
    },
  ] as Array<any>;

  public async run(factory: Factory, connection: Connection): Promise<any> {
    for (const item of this.categories) {
      await factory(Categories)().create({
        ...item,
        image: { url: await this.getImage() },
      });
    }
  }

  async getImage() {
    const response = await axios.get('https://picsum.photos/200');
    return response.request['_redirectable']['_currentUrl'];
  }
}
