import { Injectable } from '@nestjs/common';
import * as bcrypt from "bcrypt";
import * as dotenv from "dotenv";
dotenv.config();

@Injectable()
export class UtilsService {

    /**
     * a function to return hashing in password
     * @param pass {string}
     * @returns hashPass {string}
     */
    hashPass(pass: string): string {
        const hash = bcrypt.hashSync(pass, 10);
        return hash;
    }

    compareHash(hashPass: string): boolean {
        const flag = bcrypt.compareSync(hashPass, process.env.SECRET_PASS || '')
        if (flag) { return true; }
        return false;
    }

    

}
