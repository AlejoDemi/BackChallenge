
import { emailRepository } from "./repositories/mail.repository"
import { MailService } from "./services/mail.service"


describe('mail', () => {

    const repo = new emailRepository()
    const mailService = new MailService(repo)

    it('sends an email', async () => {

        const mockedEmail = {
            senderEmail: "alejo.demitropulos56778990@sirius.com",
            to:"alejotest@test.com",
            body: "alejo",
            subject: "alejo",
        }

        const mockedUser = {
            id: "1",
            email:"alejo.demitropulos56778990@sirius.com",
            password: "qwertyui",
            isAdmin: false,
        }

        repo.findUser = jest.fn().mockReturnValue(Promise.resolve(mockedUser));
        repo.create = jest.fn().mockReturnValue(Promise.resolve(mockedEmail));

        const email = await mailService.send(
            mockedEmail)

        expect(email.subject).toBe(mockedEmail.subject)

    })
})