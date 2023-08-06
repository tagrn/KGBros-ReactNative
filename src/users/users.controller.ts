import { Body, Controller, Get, Post, Req, Res } from '@nestjs/common';
import { SignupRequestDto } from './dtos/reqeusts/signup.reqeust.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  async getUser(@Req() req) {
    return req.user;
  }

  @Post('singup')
  async signup(@Body() signupRequestDto: SignupRequestDto) {
    this.usersService.signup(signupRequestDto.toSignupDto());
  }

  @Post('login')
  async login(@Req() req) {
    return req.user;
  }

  @Post('logout')
  async logout(@Req() req, @Res() res) {
    req.logout();
    res.clearCookie('connect.sid', { httpOnly: true });
    res.send('ok');
  }
}
