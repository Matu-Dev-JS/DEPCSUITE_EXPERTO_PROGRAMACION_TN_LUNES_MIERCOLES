import nodemailer from 'nodemailer'
import ENVIRONMENT from './environment.config.js'


const mailTransporter = nodemailer.createTransport(
    {
        service: 'gmail',
        auth: {
            user: ENVIRONMENT.MAIL_USERNAME,
            pass: ENVIRONMENT.MAIL_PASSWORD
        }
    }
)

export default mailTransporter