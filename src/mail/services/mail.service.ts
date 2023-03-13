import { User } from "@prisma/client"
import { env } from "process"
import { BadRequestError } from "../../error"
import { UserValidator } from "../../validate/user"
import { MailGunSender } from "../mailSenders/mailgun"
import { SendgridSender } from "../mailSenders/sendgrid"
import { IMailRepository } from "../repositories/mail.repository.interface"
import { IMailService } from "./mail.service.interface"

export class MailService implements IMailService{
    
    private emailRepository: IMailRepository

    constructor( emailRepository: IMailRepository){
        this.emailRepository = emailRepository
    }
        
    async send(data:{to:string, subject:string , body:string, senderEmail: string}){

        if(UserValidator.validateEmail(data.to)){
            throw new BadRequestError("Reciever email is in wrong format")
        }

        if(env.SENDER ==="sendgrid"){
            const sendgrid = new SendgridSender()
            sendgrid.send(data.subject , data.to ,data.body , data.senderEmail)
        } else{
            const mailgun = new MailGunSender()
            mailgun.send(data.subject , data.to ,data.body , data.senderEmail)
        }
            
        return await this.emailRepository.create(data)
       
    }

    async findUser(id: string): Promise<User | null>{
        return this.emailRepository.findUser(id)
    }
}