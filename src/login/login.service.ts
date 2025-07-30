import { Injectable } from '@nestjs/common';

import { UtilsService } from "../utils/utils.service";

@Injectable()
export class LoginService {
    constructor(private utilsService: UtilsService) { }

    /**
     * 
     * @param user_name 
     * @param pass 
     * @returns string
     */
    loginS(user_name: string, pass: string) {
        console.log(user_name + " " + pass);
        return 'passB';
    }



}
