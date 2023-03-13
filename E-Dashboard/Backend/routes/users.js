const express = require('express')
const User = require('../modules/user')
const router = express.Router();
const zxcvbn = require('zxcvbn'); //use to check password strength
const jwt = require('jsonwebtoken')
const base64 = require('base-64'); //encrypt into base-64
const utf8 = require('utf8');
const auth = require('../middleware/auth')

router.post('/', async (req, res) => {
    try {
        const data = req.body;
        const score = zxcvbn(req.body.password).score;
        var usr = await User.findOne({ email: req.body.email })
        if (usr) return res.status(400).send({ success: false, msg: "Email all Reacy Exist" })
        if (score < 2) return res.status(400).send({ success: false, msg: "Password strength is low" })
        if (!data) return res.status(401).send("Sorry data isn't found")
        var usr = await User.findOne({ email: req.body.email })
        var bytes = utf8.encode(req.body.password);
        var encoded = base64.encode(bytes);
        usr = User.create({
            name: req.body.name,
            email: req.body.email,
            password: encoded
        })
        if (!usr) return res.status(501).send("Data not inserted")
        res.status(200).send({ success: true, msg: 'signup successfully' }) //send 
    } catch (error) {
        console.log(error)
        res.status(500).send({ success: false, error: error })
    }
})

router.post('/login', async (req, res) => {
    try {
        var usr = await User.findOne({ email: req.body.email })
        console.log(usr)
        if (!usr) return res.status(500).send({ success: false, msg: "Email or Password is wrong" })
        console.log(usr.password)
        var bytes = base64.decode(usr.password);
        var pwd = utf8.decode(bytes);
        if (pwd !== req.body.password) return res.status(500).send({ success: false, msg: "Email or Password is wrong" })
        const obj = {
            _id: usr._id.valueOf(),
            email: usr.email
        }
        console.log(obj)
        const token = jwt.sign(obj, process.env.SECRET_KEY)
        const uname = usr.name
        console.log(uname)
        res.status(200).send({ success: true, msg: "login successfully", uname, token })

    } catch (error) {
        console.log(error)
        res.status(500).send({ success: false, error: error })
    }
})

router.post('/profile', auth, async (req, res) => {
    res.send({ hello: 'world' })
})
// router.post('/auth', (req, res) => {
//     const token = req.header('auth-token');
//     console.log(token)
//     res.send({ success: true, msg: token })
// })

module.exports = router