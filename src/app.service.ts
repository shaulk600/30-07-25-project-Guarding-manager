import { Injectable } from '@nestjs/common';
import bcrypt from "bcrypt";

@Injectable()
export class AppService {
  getHello(): string {
    return 'whlcome - in logIn Please write login in CLI';
  }
}
