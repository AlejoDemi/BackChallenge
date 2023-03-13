import {Prisma} from "@prisma/client";
import {prisma} from "../../server";
import {hashPaswsord, validatePassword} from "../../utils/password";
import {UserValidator} from "../../validate/user";
import {BadRequestError, NotFoundError} from "../../error";
import {generateJWT} from "../../utils/token";
import { IUserRepository } from "../repositories/user.repository,interface";
import { IUserService } from "./user.service.interface";

export class UserService implements IUserService{

    private userRepository : IUserRepository

    constructor(userRepository : IUserRepository){
        this.userRepository = userRepository
    }

    async create  (data: Prisma.UserCreateInput) {

        if(UserValidator.validateUserBody({email: data.email, password: data.password})){
            throw new BadRequestError("Bad request")
        }

        data.password = await hashPaswsord(data.password);

        const user = await this.userRepository.findUser(data?.email)
        console.log(user)
        if(user){
            throw new BadRequestError("Email already in use")
        }
        return this.userRepository.create(data)
    }

    async login  (email: string, password:string) {
        if(UserValidator.validateUserBody({email: email, password: password})){
            throw new BadRequestError("Bad request")
        }
        const user = await this.userRepository.findUser(email)
        if(!user){
            throw new NotFoundError("Email not registered")
        } else{
            const validatedPassord = await validatePassword(password, user.password)
            if (!validatedPassord) throw new BadRequestError("Wrong password")
    
            return generateJWT(user.id, user.isAdmin? "ADMIN" : "USER")
        }

       
    }
}

