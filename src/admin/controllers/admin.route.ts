import express from "express";
import { adminRepository } from "../repositories/admin.repository";
import { AdminService } from "../services/admin.service";


const router = express.Router()

router.get('/stats' , async (req , res) =>{
    try{
        const token = req.headers.authorization?.substring(7)
        const adminService = new AdminService(new adminRepository())
        const mails = await adminService.todayMails(token!)
        return res.status(201).json(mails)
    } catch (e:any) {
        return res.status(e.statusCode).json(e.message)
    }
   
})

export {router}