import { User } from "./user.entity";

export type Email ={
    id? : String; 
    sender? : User;  
    senderEmail: String
    to: String;
    body? : String;
    subject?: String;
    date? :Date;
}