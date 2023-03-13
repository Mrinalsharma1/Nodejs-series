var jwt = require('jsonwebtoken');


const auth = async (req, res, next) => {
    const token = req.header('auth-token');
    const result = jwt.verify(token, process.env.SECRET_KEY)
    console.log(token, result)
    next()
}
module.exports = auth;