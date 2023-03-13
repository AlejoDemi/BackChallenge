import { Email } from "../../models/email.entity";
import { User } from "../../models/user.entity";


export interface IMailRepository{
     create(data:any) : Promise <Email>

     findUser(id:string) : Promise <User  | null>
}