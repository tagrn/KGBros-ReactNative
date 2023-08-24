import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class UserService {
  async getUser() {
    Logger.log('Lifecycle Test: Step 7 - Service');
  }
}
