import express from "express"
import {PrismaClient} from "@prisma/client";
import {router} from "./user/controllers/user.router";
import { router as mailRouter } from "./mail/controllers/mail.router";
import { router as adminRouter } from "./admin/controllers/admin.route";
import { validateAccessToken } from "./utils/token";

const server = express()
server.use(express.json())

export const prisma = new PrismaClient()

//enable cors
server.use('/user',router)
server.use('/email',mailRouter)
server.use('/admin',adminRouter)

server.listen(8000, () => {
   // console.log(validateAccessToken("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjgxNzFmMWViLTZlYjItNDJkOS1hZDA4LWI3Y2M4MWJhMmFkNCIsInJvbGUiOiJVU0VSIiwiaWF0IjoxNjc3ODUwNTkyLCJleHAiOjE2Nzc4NTQxOTJ9.DL7nfrAfj4G6sX_3RerDgWggRsbOqKIORJHQEad5x0U"))
});
