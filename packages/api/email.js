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

message = {

    to: "mihailbozhilovjr@gmail.com",

    subject: "Subject",

    text: "Hello SMTP Email"

}

transporter.sendMail(message, (err, info) => {

    if (err) {

        console.log(err)

    } else {

        console.log(info);

    }
})