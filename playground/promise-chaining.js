require('../src/db/mongoose.js')
const User = require('../src/models/user.js')
const Task = require('../src/models/task.js')

//5ee875c10810f624740e3c5b

/* User.findByIdAndUpdate('5ee98da58a77221e7c6a7c91', {age: 1} ).then( (user) => {
    //this will just give find user not updated one
    console.log(user)

    return User.countDocuments({age: 1})
}).then( (count) => {
    console.log(count)
}).catch((e) => {
    console.log(e)
}) */

//5ee99124d1638a2a40469fd6

const updateAgeAndCount = async (id,age) => {
    const user = await User.findByIdAndUpdate(id, {age})
    return  count = User.countDocuments({age})
}

updateAgeAndCount('5ee875c10810f624740e3c5b',20).then( (count) => {
    console.log(count)
}).catch( (e) => {
    console.log(e)
})