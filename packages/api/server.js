const express = require('express')
const bp = require('body-parser')
const file = require('./sheets.js')
const append = require('./sheets')
const mailer = require('./email')
const sheets = require('./sheets.js')
const cors = require('cors')
const https = require('https')
const http = require('http')
const fs = require('fs')




const app = express()
const http_port = 8080
const https_port = 8000
app.use(bp.json())
app.use(bp.urlencoded({ extended: true }))
app.use(cors())

validateBody = (obj) => {

    if (('fullName' in obj && obj['fullName'] != null) && ('email' in obj && obj["email"] != null)) {
        return true
    }

    return false
}

parseBody = (obj) => {
    let newObj = {}
    newObj['fullName'] = obj['fullName']
    newObj['email'] = obj['email']

    if ('school' in obj && obj['school'] != null) {
        newObj['school'] = obj['school']
    }

    return newObj
}

app.post('/api/signup', (req, res) => {

    if (!validateBody(req.body)) {
        res.sendStatus(400)
        return
    }

    try {
        cleanedObj = parseBody(req.body)
        sheets.handleAppending(cleanedObj)
        mailer.sendMail(cleanedObj)
        res.sendStatus(200)
    }

    catch {
        // Internal Server Error
        res.sendStatus(500)
    }


})

if (process.env.NODE_ENV == "production") {

    var options = {
        key: fs.readFileSync('./certs/hubconf.key'),
        cert: fs.readFileSync('./certs/hubconf.crt')
    }

    var https_server = https.createServer(options, app).listen(https_port, () => {
        console.log(`PRODUCTION APP IS LISTENING ON PORT ${https_port}`)
    })
}

else {
    var http_server = http.createServer(app).listen(http_port, () => {
        console.log(`DEVELOPMENT APP IS LISTENING ON PORT ${http_port}`)
    });
}




