const nodemailer = require('nodemailer');
const loadenv = require('dotenv')

module.exports = {
    sendMail: function (obj) {
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

            to: obj.email ,

            subject: "Subject",

            text: `Dear ${obj.fullName} you are invited to.`

        }

        transporter.sendMail(message, (err, info) => {

            if (err) {

                console.log(err)

            } else {

                console.log(info);

            }
        })
    }
}