import { Prisma } from "@prisma/client";
import { User } from "../../models/user.entity";

export interface IUserService{

    create(data: Prisma.UserCreateInput) : Promise<User>

    login(email: string, password:string) : Promise<any>
}