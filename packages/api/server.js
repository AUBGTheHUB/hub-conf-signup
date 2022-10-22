const express = require('express')
const bp = require('body-parser')
const file = require('./sheets.js')
const append = require('./sheets')
const mailer = require('./email')
const sheets = require('./sheets.js')

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

app.post('/api/signup', (req, res) => {

    if(!validateBody(req.body)){
        res.sendStatus(400)
        return
    }

    try{
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

app.listen(port, () => {
    console.log(`APP IS LISTENING ON PORT ${port}`)
})
