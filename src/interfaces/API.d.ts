import User from 'src/modules/users/entities/user.entity';
import { Role } from '../modules/roles/entities/role.entity';
import { Goods } from '../modules/goods/entities/goods.entity';

export interface API {
  user: () => User;
  roles: () => Role;
  goods: () => Goods;
}
