module.exports = midwaler = (req, res, next) => {
    if (!req.query.age) { //here we are taking url paramater and base on that our rest code will execute
        res.send("please provide age")
    } else if (req.query.age < 20) {
        res.send("you age is not more") //if the age will less than 20 the this msg will print
    } else {
        next() //it mean code is okk and can execute rest of the code
    }
}