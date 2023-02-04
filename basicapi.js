const http = require('http')
const { json } = require('stream/consumers')
const data = require('./basicdata')
http.createServer((req, res) => {
    // console.log("hey")
    res.writeHead(200, { 'Content-Type': 'application\json' })
    res.write(JSON.stringify(data))
    res.end()
}).listen(3000)