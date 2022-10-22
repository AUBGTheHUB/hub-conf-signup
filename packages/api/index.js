const express = require('express')
const bp = require('body-parser')
const file = require('./sheets.js')
const append = require('./sheets')
const mailer = require('./email')

const app = express()
const port = 8000
app.use(bp.json())
app.use(bp.urlencoded({extended: true}))

validateBody = (obj) => {

    if(('fullName' in obj && obj['fullName'] != null) && ('email' in obj && obj["email"] != null))
    {
        return true
    }
       
    return false

}

parseBody = (obj) => {
   let newObj = {}
   newObj['fullName'] = obj['fullName']
   newObj['email'] = obj['email']

   if ('school' in obj && obj['school'] != null){
    newObj['school'] = obj['school']
   }

   return newObj
}

app.get("/", (req, res)=> {
    mailer.sendMail(req.body)
    res.send("OK")
})

app.post('/api/signup', (req, res) => {

    if(!validateBody(req.body)){
        res.sendStatus(400)
        return
    }

   obj = parseBody(req.body)
   res.send(obj)

    // append.handleAppending(obj)
    // mail.sendMail(obj.name)
})

app.listen(port, () => {
    console.log(`APP IS LISTENING ON PORT ${port}`)
})
