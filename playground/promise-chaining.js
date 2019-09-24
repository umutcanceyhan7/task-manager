require('../src/db/mongoose')

const User = require('../src/models/user')

// 5d863843645b3d2108359f70

User.findByIdAndUpdate('5d863b6ddee6b729fc764cf8', { age: 5}).then((user) => {
    console.log(user) 
    return User.countDocuments({age: 5})
}).then((result) => {
    console.log(result)
}).catch((e) => {
    console.log(e)
})