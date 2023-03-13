import express from "express";
import { BadRequestError } from "../../error";
import { validateAccessToken } from "../../utils/token";
import { emailRepository } from "../repositories/mail.repository";
import { MailService } from "../services/mail.service";


const router = express.Router()

router.post('/send-email',  async (req ,res ) => {
    try {

        const {to,subject ,body} = req.body
        const token = req.headers.authorization?.substring(7)
        console.log(token)
        const {id} = validateAccessToken(token!)
        const mailService = new MailService(new emailRepository())
        const user = await mailService.findUser(id)

        if(!user){
            throw new BadRequestError("User not found")
        }else{
            const email = await mailService.send({to,subject,body,senderEmail: user.email})
            return res.status(201).json(email)
        } 
    } catch(e:any) {
        return res.status(e.statusCode).json(e.message)
    }
   
    
})

export {router}