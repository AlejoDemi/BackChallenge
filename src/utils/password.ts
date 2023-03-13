const bcrypt = require('bcrypt');

export const hashPaswsord = async (password:string) => {
    return password
    // return await bcrypt.hash(password , 10)
}

export const validatePassword = async (password:string , hash:string) => {
    //return await bcrypt.compare(password,hash)
    return password === hash
}
