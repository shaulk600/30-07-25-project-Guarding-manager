import { Injectable } from '@nestjs/common';

@Injectable()
export class LoginService {

    /**
     * 
     * @param user_name 
     * @param pass 
     * @returns string
     */
    loginS(user_name:string , pass:string){
        console.log(user_name + " " + pass);
        return 'jgjgj'
    }

    

}
