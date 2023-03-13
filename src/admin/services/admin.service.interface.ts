export interface IAdminService{

    todayMails(token:string) : Promise<{sender: string, amount: number}[]> 
}