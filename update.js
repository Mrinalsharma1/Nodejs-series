const db = require('./db')

const updat = async () => {
    const con = await db()
    // updateone to update first product from collection
    // const result = await con.updateOne(
    //     { name: 'note 4' }, {
    //     $set: { name: 'max 4 pro' }
    // }
    const result = await con.updateMany(
        { name: 'max 7 pro' }, {
        $set: { name: 'max 7 pro', price: 700 }//we can update multiple value also
    }
    )
    if (result.acknowledged) console.log("data updated successfully")
    // console.warn(result)
}
updat()