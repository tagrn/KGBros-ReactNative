import {
  Body,
  Controller,
  Get,
  Logger,
  Post,
  Req,
  Res,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { User } from 'src/decorators/user.decorator';
import { UndefinedToNullInterceptor } from 'src/interceptors/undefined.interceptor';
import { SignupRequest } from './reqeusts/signup.reqeust';
import { UsersService } from './users.service';
import { SignupDto } from './dtos/signup.dto';
import { AuthGuard } from '@nestjs/passport';
import { LocalAuthGuard } from 'src/auth/local-auth.guard';
import { NotLoggedInGuard } from 'src/auth/not-logged-in.guard';
import { LoggedInGuard } from 'src/auth/logged-in.guard';

@UseInterceptors(UndefinedToNullInterceptor)
@ApiTags('Users')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  async getUser(@User() user) {
    return user;
  }

  @UseGuards(NotLoggedInGuard)
  @Post('singup')
  async signup(@Body() signupRequest: SignupRequest) {
    Logger.error(signupRequest);
    await this.usersService.signup(
      SignupDto.makeFromSignupRequest(signupRequest)
    );
  }

  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Req() req) {
    return req.user;
  }

  @UseGuards(LoggedInGuard)
  @Post('logout')
  async logout(@Req() req, @Res() res) {
    req.logout();
    res.clearCookie('connect.sid', { httpOnly: true });
    res.send('ok');
  }
}
