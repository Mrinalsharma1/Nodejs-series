const os = require('os')

console.log(os.platform()) //display the operating system name
console.log(os.arch()) //display system bit like x64
// console.log(os.cpus()) //about cpu info
console.log(os.freemem() / (1024 * 1024 * 1024)) //display the free ram
console.log(os.totalmem() / (1024 * 1024 * 1024)) //display the total ram
console.log(os.userInfo())//about user details
console.log(os.hostname())//diaplay system name
// console.log(os.networkInterfaces()) //about network info
console.log(os.getPriority()) //about cpu priority
console.log(os.version())//return os version