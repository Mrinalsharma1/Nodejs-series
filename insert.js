const db = require('./db')

// const data = [
//     { name: 'note 4', brand: 'mi', price: 500, category: 'mobile', usertype: 'admin' },
//     { name: 'note 4', brand: 'mi', price: 500, category: 'mobile' },
//     { name: 'note 4', brand: 'mi', price: 500, category: 'mobile' }
// ]
const data1 = { name: 'note 8', brand: 'mi', price: 500, category: 'mobile', usertype: 'admin' }
const coll = "user" //dynamic collection
const insert1 = async () => {
    // console.log("hey")
    const con = await db()
    // const result = await con.insertOne({
    //     name: 'note 4', brand: 'mi', price: 500, category: 'mobile'
    // })
    const check = await con.findOne({ name: 'note 8' }) //to check whether data is exist or not

    if (check.name != data1.name) {
        result = await con.insertOne(data1)
        // console.log(result)
        if (result.acknowledged == true) console.log("data inserted succussfully")
    } else {
        console.log("data all ready exist in collection")
    }

}
insert1()