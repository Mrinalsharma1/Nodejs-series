const db = require('./db')
const mongodb = require('mongodb')
const express = require('express')
const app = express()

app.use(express.json())

app.get('/', async (req, res) => {
    const conn = await db()
    const data = await conn.find().toArray()
    res.send(data)
})

app.post('/', async (req, res) => {
    let data = await db()
    let result = await data.insertOne(req.body)
    if (result.acknowledged) {
        res.status(200).send("data inserted seccessfully")
    } else {
        res.status(500).send("internal server error")
    }
})

app.put('/:name', async (req, res) => {
    let data = await db()
    let result = await data.updateOne(
        { name: req.params.name },
        { $set: { name: req.body.name } }
    )
    res.send(result)
    // console.log(req.body)
})

app.delete('/:id', async (req, res) => {
    // console.log(req.params.id)
    let data = await db()
    // let result = await data.deleteMany({ name: "note 4" })//using static value
    let result = await data.deleteOne({ _id: new mongodb.ObjectId(req.params.id) }) //delete from mongodb id
    res.send(result)
})

app.listen(5000)
