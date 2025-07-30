import { Injectable } from '@nestjs/common';

@Injectable()
export class LoginService {

    loginS(user_name:string , pass:string){
        console.log(user_name + " " + pass);
        return 'jgjgj'
    }
}
