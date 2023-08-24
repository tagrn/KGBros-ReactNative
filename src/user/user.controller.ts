import {
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Logger,
  Param,
  UseFilters,
  UseGuards,
  UseInterceptors,
  UsePipes,
} from '@nestjs/common';
import { UserService } from './user.service';
import { ControllerGuard, RouteGuard } from './user.guard';
import { ControllerInterceptor, RouteInterceptor } from './user.interceptor';
import { ControllerPipe, ParameterPipe, RoutePipe } from './user.pipe';
import {
  ControllerExceptionFilter,
  RouteExceptionFilter,
} from './user.exception.filter';

@UseGuards(ControllerGuard)
@UseInterceptors(ControllerInterceptor)
@UsePipes(ControllerPipe)
@UseFilters(ControllerExceptionFilter)
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @UseGuards(RouteGuard)
  @UseInterceptors(RouteInterceptor)
  @UsePipes(RoutePipe)
  @UseFilters(RouteExceptionFilter)
  @Get()
  async getHello(@Param('id', ParameterPipe) id) {
    Logger.log('Lifecycle Test: Step 6 - Controller');
    await this.userService.getUser();

    // throw new HttpException('Exception Filter Test', HttpStatus.BAD_REQUEST);

    return '';
  }
}
