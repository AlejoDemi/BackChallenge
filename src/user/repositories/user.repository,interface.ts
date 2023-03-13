import { Prisma } from "@prisma/client";
import { User } from "../../models/user.entity";

export interface IUserRepository{
    findUser(email:string) : Promise <User | null>
    create(data: Prisma.UserCreateInput) : Promise<User>
}