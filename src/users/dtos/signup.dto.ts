import { SignupRequest } from '../reqeusts/signup.reqeust';

export class SignupDto {
  public email: string;
  public nickname: string;
  public password: string;

  constructor(email: string, nickname: string, password: string) {
    this.email = email;
    this.nickname = nickname;
    this.password = password;
  }

  static makeFromSignupRequest(signupRequest: SignupRequest) {
    return new SignupDto(
      signupRequest.email,
      signupRequest.nickname,
      signupRequest.password
    );
  }
}
