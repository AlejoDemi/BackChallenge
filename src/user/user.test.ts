import { BadRequestError } from "../error"
import { userRepository } from "./repositories/user.repository"
import { UserService } from "./services/user.service"
import {prisma} from '../server';

describe('user',  () => {

    const repo = new userRepository()
    const userService = new UserService(repo)

    it('create a new user', async() => {

        const mockedUser = {
            id: "1",
            email:"alejo.demitropulos56778990@sirius.com",
            password: "qwertyui",
            isAdmin: false,
        }

        repo.findUser = jest.fn().mockReturnValue(null);
        repo.create = jest.fn().mockReturnValue(Promise.resolve(mockedUser));
        
        const user = await userService.create({
            email: 'alejo.demitropulos56778990@sirius.com',
            password: '123'
        })

        expect(user.email).toBe(mockedUser.email)
    })

    it('login', async() => {

        const mockedUser = {
            id: "1",
            email:"alejo.demitropulos11@sirius.com",
            password: "qwertyui",
            isAdmin: false,
        }

        repo.findUser = jest.fn().mockReturnValue(null);
        repo.create = jest.fn().mockReturnValue(Promise.resolve(mockedUser));

        const user = await userService.create({
            email: 'alejo.demitropulos56778990@sirius.com',
            password: '123'
        })

        repo.findUser = jest.fn().mockReturnValue(user);

        const login = await userService.login(
            user.email,
            user.password
        )
        
        expect(login).toBeTruthy()
    })
})

