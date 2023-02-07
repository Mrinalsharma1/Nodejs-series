// it will execute in order 
console.log("program start...")
const a = 10
var b = 0

// setTimeout(() => {
//     console.log("logic execute...") //now due to settimout output varied
//     b = 20
// }, 2000);

console.log("End task...", a + b) //here you will get only 10 but actual o/p shoude be 30 that is the big dradback of asynchronous programming

// to overcome this problem we have promise

const watingData = new Promise((resolve, reject) => {
    b = 20
    resolve(b)
}).then((data) => {
    b = data
    console.log(a + b)
})