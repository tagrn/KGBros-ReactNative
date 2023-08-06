import { Injectable } from '@nestjs/common';
import { SignupDto } from './dtos/signup.dto';

@Injectable()
export class UsersService {
  async signup(signup: SignupDto) {
    // DB 필요
  }
}
