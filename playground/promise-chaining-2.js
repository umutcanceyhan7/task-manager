require('../src/db/mongoose')

const Task = require('../src/models/task')


Task.findByIdAndDelete('5d8385aae100421c78c3025e').then((task) => {
    console.log(task)
    return Task.countDocuments({completed:true})
}).then((result) => {
    console.log(result)

}).catch((e) => {
    console.log(e)
})