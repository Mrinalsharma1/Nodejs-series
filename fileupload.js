const express = require('express')
require('./configdb')
const multer = require('multer')
const product = require('./productSchema')
const app = express()
app.use(express.json())


const upload = multer({
    storage: multer.diskStorage({
        destination: function (req, file, cb) {
            cb(null, "uploads")//location for storing file
        },
        filename: function (req, file, cb) {
            cb(null, file.fieldname + "-" + Date.now() + ".jpg") //we can change file name
        }
    })
}).single("user_file")//if one file then single and parameter is file name

//upload is act as a middle ware
app.post('/upload', upload, (req, res) => {
    // console.log("hello")
    res.send("file uploaded")
})

app.listen(5000)