export interface IAdminRepository{
    senders() : Promise<{email:string, mails: { id: string; }[]; }[]>
}