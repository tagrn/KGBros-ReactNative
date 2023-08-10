import { ApiProperty } from '@nestjs/swagger';
import { SignupDto } from '../users/dtos/signup.dto';

export class SignupRequestDto {
  @ApiProperty({
    example: 'tagrn@example.com',
    required: true,
  })
  public email: string;
  @ApiProperty({
    example: 'tagrn',
    required: true,
  })
  public nickname: string;
  @ApiProperty({
    example: 'tagrpassword',
    required: true,
  })
  public password: string;

  toSignupDto() {
    return new SignupDto(this.email, this.nickname, this.password);
  }
}
