import {
  Body,
  Controller,
  Get,
  Post,
  Req,
  Res,
  UseInterceptors,
} from '@nestjs/common';
import { SignupRequestDto } from '../reqeusts/signup.reqeust.dto';
import { UsersService } from './users.service';
import { ApiTags } from '@nestjs/swagger';
import { User } from 'src/decorators/user.decorator';
import { UndefinedToNullInterceptor } from 'src/interceptors/undefined.interceptor';

@UseInterceptors(UndefinedToNullInterceptor)
@ApiTags('Users')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  async getUser(@User() user) {
    return user;
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
