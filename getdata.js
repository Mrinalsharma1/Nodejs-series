const express = require('express')
require('./configdb')
const product = require('./productSchema')
const app = express()
app.use(express.json())

app.post('/create', async (req, res) => {
    // console.log("hello")
    // res.send("done")
    let data = new product(req.body)
    let result = await data.save()
    console.log(result)
    res.send(result)
})

app.get('/list', async (req, res) => {
    let data1 = await product.find()
    res.send(data1)
})

app.delete('/delet/:_id', async (req, res) => {
    console.log(req.params.id)
    let data = await product.deleteOne(req.params.id)
    res.send(data)
})

app.listen(5000)