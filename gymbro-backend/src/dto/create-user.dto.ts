import { Role } from "src/enums/role.enum";

export class CreateUserDTO
{
    email : string;
    firstName : string;
    lastName : string;
    birthDate : string;
    password : string;
    role : Role;
}