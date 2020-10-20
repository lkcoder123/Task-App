require('../src/db/mongoose.js')
const Task = require('../src/models/task.js')

/* Task.findByIdAndDelete('5ee99124d1638a2a40469fd6').then((task) => {
    console.log(task)

    return Task.countDocuments({completed: false})
}).then( (count) => {
    console.log(count)
}).catch( (e) => {
    console.log(e)
}) */


const deleteTaskAndCount = async (id) => {
    const task = await Task.findByIdAndDelete(id)
    const count = await Task.countDocuments({completed:false})
    return count
}

deleteTaskAndCount('5ee9c1f2b89e279dc90b5695').then( (count) => {
    console.log(count)
}).catch( (e) => {
    console.log(e)
})