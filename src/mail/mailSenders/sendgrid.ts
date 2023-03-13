import { MailSender } from "./mailSenders.interface";
import { env } from "process";
import sgMail from '@sendgrid/mail'

export class SendgridSender implements MailSender{
    public apikey: string | undefined;

    constructor(){
        this.apikey = env.SENDGRID_API_KEY
    }
    
    send =(subject:string, receiver:string, message:string, sender:string)=>{
        console.log("entro a sg")
        sgMail.setApiKey(this.apikey!)
        sgMail.send({
            subject:subject,
            to:receiver, 
            text:message,
            from:sender
        }).then((r)=>{
            console.log(r)
        })
        .catch((error) => {
            console.error(error)
          })
    }
    
}