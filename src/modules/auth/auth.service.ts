import {
  Injectable,
  InternalServerErrorException,
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

      const currentUser: any = await conn.findOne({
        email: user.email,
      });

      if (currentUser) {
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
      } else {
        throw new UnauthorizedException();
      }
    } catch (e) {
      throw new InternalServerErrorException(e);
    }
  }

  validatePassword(password: string, hash: string): Promise<boolean> {
    return bcrypt.compare(password, hash);
  }

  logout() {
    return true;
  }
}
