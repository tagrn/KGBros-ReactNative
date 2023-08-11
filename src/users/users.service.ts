import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Users } from 'src/entities/Users';
import { Repository } from 'typeorm';
import { SignupDto } from './dtos/signup.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(Users)
    private readonly userRepository: Repository<Users>
  ) {}

  async signup(signupDto: SignupDto): Promise<void> {
    const user = await this.userRepository.findOne({
      where: { email: signupDto.email },
    });

    if (user) {
      throw new BadRequestException('이미 존재하는 사용자입니다.');
    }

    const hashedPassword = await bcrypt.hash(signupDto.password, 1);
    this.userRepository.save({
      email: signupDto.email,
      nickname: signupDto.nickname,
      password: hashedPassword,
    });
  }
}
