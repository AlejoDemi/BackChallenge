import { User } from "../../models/user.entity";
import { prisma } from "../../server";
import { IAdminRepository } from "./admin.repository.interface";

export class adminRepository implements IAdminRepository{
    async senders(): Promise<{email:string,mails: { id: string; }[]}[]> {
        return(
            await prisma.user.findMany({
                where:{
                    mails: {
                        some: {
                            date:{
                                gte: new Date(new Date().setHours(0,0,0,0))  
                            },        
                        },
                    },
                },
                select: {
                    email: true,
                    mails: {
                        where: {
                            date:{
                                gte: new Date(new Date().setHours(0,0,0,0))  
                            },  
                        },
                        select: {
                            id: true,
                        },
                    },
                },
            })
        )
    }
    
}