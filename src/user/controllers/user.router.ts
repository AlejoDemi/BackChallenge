import express from "express";
import { UserValidator } from "../../validate/user";
import {BadRequestError, InternalServerError} from "../../error";
import {UserService} from "../services/user.service";
import { userRepository } from "../repositories/user.repository";


const router = express.Router()

router.post('/signup', async (req, res) => {
    try {
        const userService = new UserService(new userRepository())
        const user = await userService.create(req.body)
        return res.status(201).json(user)
    } catch (e: any) {
        console.log(e)
        return res.status(e.statusCode).json(e.message)
    }
})

router.post('/login', async (req ,res ) => {
    try{
        const {email, password} = req.body
        const userService = new UserService(new userRepository())
        const token = await userService.login(email, password)
        return res.status(201).json(token)
    } catch (e:any) {
        return res.status(e.statusCode).json(e.message)
    }
})

export {router}