export interface MailSender{
     apikey: String  | undefined
     send(subject:string, receiver:string, message:string, sender:string): any
}

