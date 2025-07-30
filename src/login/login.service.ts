import { Injectable } from '@nestjs/common';

import { UtilsService } from "../utils/utils.service";
import { setUserDto } from "../entitis/setUser.dto";
import { Role } from 'src/entitis/role.enum';

@Injectable()
export class LoginService {
    constructor(private utilsService: UtilsService) { }

    /**
     * a function to retured token if validation true
     * @param user_name 
     * @param pass 
     * @returns string
     */
    loginS(user_name: string, pass: string) {
        //check
        const passHash = this.utilsService.hashPass(pass);
        const isValid = this.utilsService.compareHash(passHash);
        if (isValid) {
            //set token
            //בהמשך נשים בטוקן ID כרגע רק name וגם role

            const role: Role = Role.soldier; // such as i'm enter value to Role

            const setUser1: setUserDto = {
                user_name: user_name,
                pass: passHash,
                role: role
            };
            const myToken = this.utilsService.createToken(setUser1);
            console.log({ success: true, myToken });
            return myToken
        }
        return { success: false };
    }

}
