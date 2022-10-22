const nodemailer = require('nodemailer');
const loadenv = require('dotenv')


loadenv.config()

module.exports = {
    sendMail: function (obj) {

        const transporter = nodemailer.createTransport({

            host: 'smtp.gmail.com',

            port: 465,

            auth: {

                user: process.env.HUB_MAIL_USERNAME,

                pass: process.env.HUB_MAIL_PASSWORD

            }

        })

        message = {

            from: "The Hub AUBG",

            to: obj.email ,

            subject: "HubConf 2022",

            html: 
            `
            <h1>Dear ${obj.fullName}, thank you for attending HubConf!</h1>
            <img src="http://hentaireviews.moe/wp-content/uploads/2018/05/ecchi-anime-sexy-maid-meido-girl-white-hair-panties-huge-boobs-horny-face.jpg"/>
            `

        }
        
        transporter.sendMail(message, (err, info) => {
            if (err) {
                console.log(err)
            }
        })
}}