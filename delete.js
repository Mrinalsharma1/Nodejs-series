const db = require('./db')

const delet = async () => {
    const con = await db()
    let result = await con.deleteMany({ name: 'note 44 max' })
    console.log(result)
    if (result.acknowledged) {
        console.log("data deleted successfully")
    } else if (result.deletedCount == 0) {
        console.log("data not Exits")
    }

}
delet()