import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { Connection } from 'typeorm';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class AuthService {
  constructor(private connection: Connection, private jwtService: JwtService) {}

  async login(user: any) {
    try {
      const conn = this.connection.getRepository('user');

      const currentUser: any = await conn.findOneOrFail({
        email: user.email,
      });

      const isMatch = this.validatePassword(
        user.password,
        currentUser.password,
      );

      if (isMatch) {
        const payload = { username: user.email, sub: currentUser.id };
        delete currentUser.password;
        const token = `Bearer ${this.jwtService.sign(payload, {
          secret: process.env.SECRETKEY,
        })}`;

        return {
          token,
          user: currentUser,
        };
      }
    } catch (e) {
      throw new UnauthorizedException(e);
    }
  }

  async resetPasswordStep1({ email }: any) {
    try {
      const repository = this.connection.getRepository('user');
      await repository.findOneOrFail({ where: { email } });
      return new Promise((resolve) => resolve({ message: 'success' }));
      // await repository.update(user.id, { password: null });
    } catch (e) {
      throw new NotFoundException({ message: 'User not found' });
    }
  }
  async resetPasswordStep2({ email }: any) {
    try {
      const repository = this.connection.getRepository('user');
      await repository.findOneOrFail({ where: { email } });
      return new Promise((resolve) => resolve({ message: 'success' }));
      // await repository.update(user.id, { password: null });
    } catch (e) {
      throw new NotFoundException({ message: 'User not found' });
    }
  }

  validatePassword(password: string, hash: string): Promise<boolean> {
    return bcrypt.compare(password, hash);
  }

  logout() {
    return true;
  }
}
