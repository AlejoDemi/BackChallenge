import { User } from "../../models/user.entity";
import { prisma } from "../../server";
import { IUserRepository } from "./user.repository,interface";

export class userRepository implements IUserRepository{
    async findUser(email:string): Promise<User | null> {
        return await prisma.user.findUnique({
            where:{
                email: email
            }
        })
    }
    async create(data: User): Promise<User> {
        return await prisma.user.create({
            data
        })
    }

}