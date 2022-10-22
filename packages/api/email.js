const nodemailer = require('nodemailer');
const loadenv = require('dotenv')

loadenv.config()

let transporter = nodemailer.createTransport({

    host: 'smtp.gmail.com',

    port: 465,

    auth: {

        user: process.env.HUB_MAIL_USERNAME,

        pass: process.env.HUB_MAIL_PASSWORD

    }

})


function sendMail() {
    console.log("SEND MAIL")
}

sendMail()