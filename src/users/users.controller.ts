import {
  Body,
  Controller,
  Get,
  Logger,
  Post,
  Req,
  Res,
  UseInterceptors,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { User } from 'src/decorators/user.decorator';
import { UndefinedToNullInterceptor } from 'src/interceptors/undefined.interceptor';
import { SignupRequest } from './reqeusts/signup.reqeust';
import { UsersService } from './users.service';
import { SignupDto } from './dtos/signup.dto';

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
  async signup(@Body() signupRequest: SignupRequest) {
    Logger.error(signupRequest);
    await this.usersService.signup(
      SignupDto.makeFromSignupRequest(signupRequest)
    );
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
