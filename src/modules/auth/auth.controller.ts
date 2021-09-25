import { Controller, Get, Body, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { Public } from '../../helpers/decorators';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Public()
  @Post('login')
  login(@Body() body: LoginDto) {
    console.log('login');
    return this.authService.login(body);
  }

  @Post('reset_password_step_1')
  resetPasswordStep1(@Body() body: any) {
    return this.authService.resetPasswordStep1(body);
  }

  @Post('reset_password_step_2')
  resetPasswordStep2(@Body() body: any) {
    return this.authService.resetPasswordStep2(body);
  }

  @Public()
  @Get('logout')
  logout() {
    return this.authService.logout();
  }
}
