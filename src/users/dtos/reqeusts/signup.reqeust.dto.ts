import { SignupDto } from '../signup.dto';

export class SignupRequestDto {
  public email: string;
  public nickname: string;
  public password: string;

  toSignupDto() {
    return new SignupDto(this.email, this.nickname, this.password);
  }
}
