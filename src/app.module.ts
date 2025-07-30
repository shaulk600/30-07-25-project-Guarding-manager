import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { LoginModule } from './login/login.module';
import { UtilsModule } from './utils/utils.module';

@Module({
  imports: [LoginModule, UtilsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
