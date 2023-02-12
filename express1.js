const express = require('express') //importing express package

const app = express(); //to call express method
// console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>")
// console.log(app)

app.get('', (req, res) => { // here once client call then app.get function hit 
    console.log(req.query.name)//to fetch data from url
    res.send("this is home page " + req.query.name) // it response given data to client
})

app.get('/about', (req, res) => {
    res.send(`
        <h2>this is about page<h2>
        <a href="/faq">go to faq page</a>
    `) //here we can embedeed html tags
})
app.get('/faq', (req, res) => {
    res.send(`
        <input type="text" placeholder="Enter your Name" name="name" value=${req.query.name}> 
        <input type="submit"/>
    `)//we can send from also to the client
})
app.get('/json', (req, res) => {
    res.send(
        {
            name: "raju",
            age: "66"
        }
    )//json data
})

app.get('/obj', (req, res) => {
    res.send([
        {
            name: "mohan",
            age: "34"
        },
        {
            name: "sohan",
            age: "54"
        }
    ])
})//object data

app.listen(5000) //it is used to enable port