// import mongoose from "mongoose";
const mongoose = require('mongoose')

const main = async () => {
    await mongoose.connect('mongodb://localhost:27017/e-comm')
    const ProductSchema = new mongoose.Schema({
        name: String
    })

    const ProductModels = mongoose.model('product', ProductSchema)
    let data = new ProductModels({ name: "mi 6" })
    let result = await data.save()
    console.log(result)
}
main()