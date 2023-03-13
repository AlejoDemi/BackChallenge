import { env } from "process";
import { MailSender } from "./mailSenders.interface";
import mg from 'mailgun-js';

export class MailGunSender implements MailSender{
    apikey: string | undefined;

    constructor(){
        this.apikey= env.MAILGUN_API_KEY
    }

    send(subject: string, receiver: string, message: string, sender: string) {
        mg({apiKey:this.apikey!, domain:env.MAILGUN_DOMAIN!,host: "api.eu.mailgun.net"}).messages().send({
            from:sender,
            to:receiver,
            subject:subject,
            text:message,
        }, function(error, body) {
            console.log(error);
            console.log(body);
            
        })
    }
    
}