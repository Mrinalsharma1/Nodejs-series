const express = require('express')
const EventEmmiter = require('events');
const app = express()
let count = 0;

const events = new EventEmmiter(); //to crete a event object
events.on("CountApi", () => { //its contains two args first api name and call back
    count++;
    console.log("Count api call", count) // here we are counting the total api hits
})

app.get('/add', (req, res) => {
    res.send("add api called")
    events.emit("CountApi") //whenever api will call emit will also call
})
app.get('/update', (req, res) => {
    res.send("update api called")
    events.emit("CountApi") //whenever api will call emit will also call
})
app.get('/delete', (req, res) => {
    res.send("delete api called")
    events.emit("CountApi") //whenever api will call emit will also call
})

app.listen(5000)