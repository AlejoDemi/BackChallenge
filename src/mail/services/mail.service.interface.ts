import { Email } from "../../models/email.entity";
import { User } from "../../models/user.entity";

export interface IMailService{

    send(data:{to:string, subject:string , body:string, senderEmail: string}) : Promise<Email>

    findUser(id:string): Promise<User | null>
}