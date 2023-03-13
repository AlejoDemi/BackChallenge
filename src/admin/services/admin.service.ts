import { ForbiddenError } from "../../error"
import { validateAccessToken } from "../../utils/token"
import { IAdminRepository } from "../repositories/admin.repository.interface"
import { IAdminService } from "./admin.service.interface"

export class AdminService implements IAdminService{

    private adminRepository : IAdminRepository

    constructor( adminRepository: IAdminRepository){
        this.adminRepository = adminRepository
    }

    async todayMails (token: string): Promise<{sender: string, amount: number}[]> {

        const {role} = validateAccessToken(token)
        
        if( role === "ADMIN"){
            const senders = this.adminRepository.senders()

             return (await senders).map( (sender) => {
              return {
                 sender: sender.email,
                 amount: sender.mails.length
             }
        })
        }else {
            throw new ForbiddenError("You must be an admin to make this request")
        }
        

    }



}