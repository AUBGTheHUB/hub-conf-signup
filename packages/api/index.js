const express = require('express')
const bp = require('body-parser')

const app = express()
const port = 8000

app.use(bp.json())
app.use(bp.urlencoded({extended: true}))

app.post('/api/signup', (req, res) => {
    console.log(req.body)
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`APP IS LISTENING ON PORT ${port}`)
})
