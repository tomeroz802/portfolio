import 'dotenv/config.js'

const port = process.env.PORT
const origin = process.env.ORIGIN
const id = process.env.CLIENT_ID
const secret = process.env.CLIENT_SECRET
const refreshToken = process.env.REFRESH_TOKEN
const mail = process.env.MAIL
const mail_2 = process.env.MAIL_2

export { port, origin, id, secret, refreshToken, mail, mail_2 }