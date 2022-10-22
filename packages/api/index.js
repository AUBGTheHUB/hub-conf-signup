const express = require('express')
const bp = require('body-parser')
const file = require('./sheets.js')
const append = require('./sheets')

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
    console.log(obj)
}

app.get("/", (req, res)=> {
    append.handleAppending(req.body)
    res.send("OK")
})

app.post('/api/signup', (req, res) => {

    if(!validateBody(req.body)){
        res.send(400)
     }
     else{
        console.log(validateBody(req.body))
     }
})

app.listen(port, () => {
    console.log(`APP IS LISTENING ON PORT ${port}`)
})
