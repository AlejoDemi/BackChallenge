import { BadRequestError } from "../error";

var jwt = require('jsonwebtoken');

export const generateJWT = (id:string , role: string) =>{
    return jwt.sign({
        id,
        role
    }, 'secret' , {expiresIn: '1h'})
}

export const validateAccessToken = (token:string) =>{
    try{
        return jwt.verify(token, 'secret')
    } catch (error){
        throw new BadRequestError("Invalid credentials")
    }
}