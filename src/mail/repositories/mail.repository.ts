import { Email } from "../../models/email.entity";
import { User } from "../../models/user.entity";
import { prisma } from "../../server";
import { IMailRepository } from "./mail.repository.interface";

export class emailRepository implements IMailRepository{
    
    async findUser(id: string): Promise<User | null> {
        const user =  await prisma.user.findUnique({
            where:{
                id
            }
        }) 
        return user
    }
    async create(data: any): Promise<Email> {
        return await prisma.mail.create({
            data,
        })
    }
    
}