const fs = require('fs')
const input = process.argv
// console.log(input[2])
if (input[2] == 'add') {
    fs.writeFileSync(input[3], input[4])
} else if (input[2] == 'delete') {
    fs.unlinkSync(input[3])
} else {
    console.log("invalid input")
}
// ./inputcommand.js add test.txt 'this is test file'
// node ./inputcommand.js delete check.txt 


//                  Display file list from folder
// const path = require('path')
// const dirpath = path.join(__dirname, 'files')
for (i = 1; i <= 5; i++) {
    fs.writeFileSync("files" + "/check" + i + ".txt", "simple test files") //create multiple files in node and write something in file
    // fs.writeFileSync(dirpath + `/check${i}`, `this is file${i}`)
}
// console.log(dirpath)