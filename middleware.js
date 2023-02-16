const express = require('express')
const midwaler = require('./midware')
const app = express()
const route = express.Router()

// app.use(midwaler) //here is a middlerware

route.use(midwaler) //to enable the middleware we are using route.use()

app.get('', (req, res) => {
    res.send("this is home page")
})

route.get('/help', (req, res) => {
    res.send("this is help page")
})

app.get('/about', midwaler, (req, res) => { //here for single page we can again use middleware 
    res.send("this is about page")
})

app.use('/', route) //here we are using route instance
app.listen(5000)