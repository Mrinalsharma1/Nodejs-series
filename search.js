const express = require('express')
require('./configdb')
const product = require('./productSchema')
const app = express()
app.use(express.json())

app.get('/search/:key', async (req, res) => {
    console.log(req.params.key)
    const data = await product.find(
        {
            //or means among any 
            "$or": [
                { "name": { $regex: req.params.key } }, //to search from any char which is exist in name 
                { "brand": { $regex: req.params.key } }, //to search from any char which is exist in brand 
                { "category": { $regex: req.params.key } } //to search from any char which is exist in category 
            ]
        }
    )
    console.log(data.length)//count how many value exist
    res.status(200).send(data)
})
app.listen(5000)