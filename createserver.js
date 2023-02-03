const http = require('http') //use to create server & handle req and res

// function serv(req, res) {
//     res.write("hello")
//     res.end()
// } instead of writing this we are using arrow function below

// http.createServer(serv).listen(4500)
http.createServer((req, res) => {
    res.write("<h1>hello this is node server</h1>")
    res.end()
}).listen(4500)
