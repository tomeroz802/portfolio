import nodemailer from 'nodemailer'
import { google } from 'googleapis'
import { mail, mail_2, id,  secret, refreshToken } from '../config';
import { SendData } from "./types";

const sendDetails = async (data: SendData): Promise<number> => {
    try{
        const OAuth2 = google.auth.OAuth2
        const OAuth2_Client = new OAuth2(id, secret)
        OAuth2_Client.setCredentials({ refresh_token: refreshToken })
        const accessToken = OAuth2_Client.getAccessToken()

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                type: 'OAuth2',
                user: mail,
                clientId: id, 
                clientSecret: secret,
                refreshToken: refreshToken,
                accessToken: accessToken
            }
        } as nodemailer.TransportOptions)

        const mailOptions = {
            from: mail,
            to: mail_2,
            subject: 'Contact From Portfolio',
            text: `Name: ${data.name}, Phone: ${data.phone}, Mail: ${data.mail}, Message: ${data.msg}`
        }
        
        await transporter.sendMail(mailOptions)
        return 200
    }
    catch(e){
        throw e
    }
}

export { sendDetails }