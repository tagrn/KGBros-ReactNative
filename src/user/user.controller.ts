import {
  Controller,
  Get,
  Logger,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { UserService } from './user.service';
import { ControllerGuard, RouteGuard } from './user.guard';
import { ControllerInterceptor, RouteInterceptor } from './user.interceptor';

@UseGuards(ControllerGuard)
@UseInterceptors(ControllerInterceptor)
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @UseGuards(RouteGuard)
  @UseInterceptors(RouteInterceptor)
  @Get()
  async getHello() {
    Logger.log('Lifecycle Test: Step 6 - Controller');
    await this.userService.getUser();

    return '';
  }
}
