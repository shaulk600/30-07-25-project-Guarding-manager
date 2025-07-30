import { Injectable } from '@nestjs/common';

import * as dotenv from "dotenv";
dotenv.config();
import * as bcrypt from "bcrypt";
import * as jwt from "jsonwebtoken";

import { setUserDto } from "../entitis/userToLogin.dto";

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

    /**
     * a function that return if equals pass hash
     * @param {string} hashPass 
     * @returns {boolean} if equals return true
     */
    compareHash(hashPass: string): boolean {
        const flag = bcrypt.compareSync(hashPass, process.env.SECRET_PASS || '')
        if (flag) { return true; }
        return false;
    }

    
    async createToken(setUser: setUserDto) {
        const MyToken:string = jwt.sign({ user_name: setUser.user_name, role: setUser.role }, process.env.SECRET_PASS || '', { expiresIn: '1h' });
        return MyToken;
    }


}
