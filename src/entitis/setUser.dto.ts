import { Role } from "./role.enum";

export class setUserDto {
    // user_id!: number; // '!' = if value it's type = NULL it's OK don't worry
    user_name: string;
    pass?: string; // '?' = if value exist in object - if not no problem
    role: Role

}