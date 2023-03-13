import { error } from "console"


export class UserValidator{
    private static regex: any = /^(?=.{1,254}$)(?=.{1,64}@)[-!#$%&'*+/0-9=?A-Z^_`a-z{|}~]+(\.[-!#$%&'*+/0-9=?A-Z^_`a-z{|}~]+)*@[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?(\.[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?)*$/

    static validateUserBody = ({email, password}: {email: string, password: string}) =>{
        return (!email || !password || !this.regex.test(email));

    }

    static validateEmail = (email:string) => {
        return (!this.regex.test(email))
    }
}