// import { x, y } from './importarray'
const data = require('./importarray') //import the value from another file
// var x = 4
// var y = 10
// console.log(data.x + data.y)
// to run this code in node write node ./Firstprg

const arr = [3, 4, 5, 6, 7, 2, 1]
const res = arr.filter((e) => {
    // if (e >= 3) console.log(e)
    return e > 3
})
console.log(res)

// Core Module
console.log("hey dev") //this is a global module no need to import anything
const fs = require('fs') //here we have to import so this is non-global module
fs.writeFileSync("demo.txt", "kuch v likh do") //create file and write text
console.log(__dirname) //give a directory name
console.log(__filename)// along with file directory name

// \/ Interview question...
// if you want to import any specific file module
const x = require('fs').writeFileSync //here we are only importing write file
x('temp', "this is temp file")