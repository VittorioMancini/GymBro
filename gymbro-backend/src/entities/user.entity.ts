import { Role } from "src/enums/role.enum";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User
{
    @PrimaryGeneratedColumn()
    id : number;
    @Column({type : 'enum', enum : Role, default : Role.USER})
    role : number;
    @Column({unique : true})
    username : string;
    @Column({unique : true})
    email : string;
    @Column()
    firstName : string;
    @Column()
    lastName : string;
    @Column()
    birthDate : Date;
}