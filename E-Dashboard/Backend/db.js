const { mongoose } = require('mongoose')
mongoose.set('strictQuery', false);
const connectDb = () => {
    mongoose.connect('mongodb://127.0.0.1:27017/E-commerce', () => {
        console.log("connected...")
    }).catch((e) => console.log(e))
}
module.exports = connectDb