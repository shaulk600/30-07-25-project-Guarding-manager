import { Body, Controller, Headers, Post } from '@nestjs/common';
import { LoginService } from "./login.service";

@Controller('login')
export class LoginController {
    constructor(private loginService: LoginService) { }

    /**
     * 
     * @param user_name 
     * @param pass 
     * @returns function to serviced
     */
    @Post('/')
    loginA(@Headers('user_name') user_name: string, @Headers('pass') pass: string): string {
        return this.loginService.loginS(user_name, pass);
    }

    // @Post('/')
    // loginA(@Headers('user_name') user_name:string , @Headers('pass') pass:string) :string  {
    //     console.log(user_name + " " + pass);
    //     return 'godjun';
    // }


}
