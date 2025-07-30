import { Controller, Headers, Post } from '@nestjs/common';
import { LoginService } from "./login.service";

@Controller('login')
export class LoginController {
    
    @Post('/')
    login(@Headers('user_name') user_name , @Headers('pass') pass) : string{
        console.log(user_name + " " + pass);
        return 'godjun';
    }
}
