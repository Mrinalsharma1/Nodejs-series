const dbConnect = require('./db')
// console.warn(dbConnect()) //it will giive us pending promise
// dbConnect().then((resp) => {
//     console.warn(resp)
//     resp.find().toArray().then((data) => {
//         console.warn(data)
//     })
// })

const main = async () => {
    let data = await dbConnect()
    data = await data.find().toArray()
    console.log(data)
    // return data
}
main()
// const p = main()
// setTimeout(() => {
//     // console.log(p)
// }, 3000);

// console.log("jjshds->>>>>>>>>")
// const value = main().then((res) => {
//     return res
// })
// value ? "" : console.log(value)
