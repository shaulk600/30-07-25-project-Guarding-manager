import { Injectable } from '@nestjs/common';
import bcrypt from "bcrypt";

@Injectable()
export class UtilsService {

    hashPass(pass:string) {
        return bcrypt.hashSync(pass , 10);
    }

}
