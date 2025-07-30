import { Injectable } from '@nestjs/common';
import bcrypt from "bcrypt";

@Injectable()
export class UtilsService {

    /**
     * a function to return hashing in password
     * @param pass {string}
     * @returns hashPass {string}
     */
    hashPass(pass:string) {
        return bcrypt.hashSync(pass , 10);
    }


}
