const express = require('express')
const path = require('path')
const app = express()
const publicpath = path.join(__dirname, 'files') //here we are pointing the html page file path

app.get('', (req, res) => {
    res.sendFile(`${publicpath}/index.html`) //here we are calling by defauly index.html file without showing on url
})
app.get('/about', (req, res) => {
    res.sendFile(`${publicpath}/about.html`)
})
app.get('*', (req, res) => {
    res.sendFile(`${publicpath}/help.html`) //page not found
})
// app.use(express.static(publicpath)) //here we are using the html page
app.listen(5000)
// console.log(publicpath)
