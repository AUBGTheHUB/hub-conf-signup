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

            to: obj.email,

            subject: "HubConf 2022",

            html:
                `


<!doctype html>
<html lang="en">

<head>
    <!-- Required meta tags -->
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <link href="https://fonts.googleapis.com/css?family=Roboto&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Open+Sans&display=swap" rel="stylesheet">
    <title>You registered for HubConf!</title>
    <style>
		

        
    </style>

</head>

<body style="margin-top: 15px;">
    <div class="container" style="max-height: 72px; height: 72px; background: linear-gradient(to right, #6253e1, #852D91, #e05467, #eb3941, #c5157f); -webkit-border-top-left-radius: 72px;
    -moz-border-radius-bottomleft: 90px;
    border-top-left-radius: 72px;
    max-width: 700px;">
        <p> &nbsp; </p>
    </div>
    
    <div class="container"
        style="max-width: 700px;  background-color: #fcfcff; padding-left: 30px; padding-right: 90px;">
        <br /><br />
        <h4><b>Dear ${obj.fullName}, <br /></b></h4>
        <h4><b>Thank you for registering for HubConf 2022!</b></h4>

        <p>You may find your ticket attached below: </p>
        <img src="https://i.ibb.co/0yyLbp1/313789156-1160761834838994-4665970135949644016-n.png"/>
		
		
		<br />
        <br />
        <b>- The Hub AUBG</b>
        <br />
		<br />
		<a href="https://www.facebook.com/TheHubAUBG/" target="_blank" title="TheHubAUBG"><i class="fa fa-facebook" style="font-size: 25px; padding-right: 10px;"></i></a>
		<a href="https://www.instagram.com/thehubaubg/" target="_blank" title="TheHubAUBG"><i class="fa fa-instagram" style="font-size: 25px; padding-right: 10px;"></i></a>
		<a href="https://www.linkedin.com/company/the-hub-aubg" target="_blank" title="TheHubAUBG" style="padding-left:8px;"><i class="fa fa-linkedin" style="font-size: 25px; padding-right: 10px;"></i></a>
		<a href="https://www.youtube.com/channel/UChdtBZBvaK9XZurP3GjPDug" target="_blank" title="TheHubAUBG" style="padding-left:8px;"><i class="fa fa-youtube" style="font-size: 25px; padding-right: 10px;"></i></a>
			
    </div>
	
	<div class="container" style="max-width: 700px; background-color: #fcfcff; padding-right:0; margin-top: -100px; z-index: -1;">
        <img src="https://i.ibb.co/5Mw9Dzr/Robot.png" width="250"
                height="auto" alt="TheHubAUBG"
                style="display:block; border: none; max-width:230px; margin: 0 auto; margin-bottom: 0; margin-right:0;" />
    </div>
 
    <div class="container" style="max-height: 72px; height: 72px; background: linear-gradient(to right, #6253e1, #852D91, #e05467, #eb3941, #c5157f); -webkit-border-bottom-right-radius: 72px;
    -moz-border-radius-bottomleft: 90px;
    border-bottom-right-radius: 72px;
    max-width: 700px;">
        <h5 class="text-center" style="vertical-align: middle;
    line-height: 72px; color: white; ">Learn &nbsp;•&nbsp; Innovate &nbsp;•&nbsp; Inspire</h5>
    </div>
    </div>
    <div class="container" style="margin-top: 15px; margin-bottom: 15px; max-width: 700px; font-size: 12px;
					line-height: 15px;
					text-align: center;
					color: black;
                    max-width: 820px">
        <div class="text-center">Hub International &copy;, <br />2022</div>
    </div>

    <!-- Optional JavaScript -->
    <!-- jQuery first, then Popper.js, then Bootstrap JS -->
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
        integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
        crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"
        integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1"
        crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"
        integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM"
        crossorigin="anonymous"></script>
</body>

</html>
            `

        }

        transporter.sendMail(message, (err, info) => {
            if (err) {
                console.log(err)
            }
        })
    }
}