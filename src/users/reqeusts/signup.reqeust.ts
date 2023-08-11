import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class SignupRequest {
  @IsString()
  @ApiProperty({
    example: 'tagrn@example.com',
    required: true,
  })
  public email: string;

  @IsString()
  @ApiProperty({
    example: 'tagrn',
    required: true,
  })
  public nickname: string;

  @IsString()
  @ApiProperty({
    example: 'tagrpassword',
    required: true,
  })
  public password: string;
}
