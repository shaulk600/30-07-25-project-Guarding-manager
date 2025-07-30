import { Module } from '@nestjs/common';
import { LoginService } from './login.service';
import { LoginController } from './login.controller';

import { UtilsService } from "../utils/utils.service";



@Module({
  imports:[] ,
  providers: [LoginService ,UtilsService],
  controllers: [LoginController] ,
  exports: [LoginService]
})
export class LoginModule {}
