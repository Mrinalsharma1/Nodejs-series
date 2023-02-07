const fs = require('fs')
const path = require('path')
const dirpath = path.join(__dirname, 'crud')
// console.log(dirpath)
const filepath = `${dirpath}/test.txt`
// create a file
fs.writeFileSync(filepath, 'this is a simple text file')

// read the file
fs.readFile(filepath, 'utf8', (err, item) => {
    console.log(item)
})

//append the data inside the file 
fs.appendFile(filepath, 'and file name is temp.txt', (err) => {
    if (!err) console.log("file is updated")
})

// rename the file name
fs.rename(filepath, `${dirpath}/temp.txt`, (err) => {
    if (!err) console.log("file name is updated")
})

// delete the file
fs.unlinkSync(`${dirpath}/temp.txt`)

// interview question :- what is buffer?
// buffer is nothing but a space where node will perform or execute operaction