import { ApiProperty } from '@nestjs/swagger';
import { SignupDto } from '../dtos/signup.dto';

export class SignupRequest {
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
}
