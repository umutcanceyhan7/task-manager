// CRUD create read update delete

const {MongoClient, ObjectID} = require('mongodb')
const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'  

MongoClient.connect(connectionURL, {useNewUrlParser: true, useUnifiedTopology: true} , (error, client) => {
    if(error) {
        return console.log('Unable to connect to database')
    }
    
    const db = client.db(databaseName)

//     db.collection('users').insertOne({
//         name:'Umutcan',
//         age: 19
//     }, (error, result) => {
//         if (error) {
//             return console.log('Unable to insert user')
//         }
//         console.log(result.ops)
//         // console.log(result.insertedCount)
//         // console.log(result.ops)
//         // console.log(result.insertedId)g
//         // console.log(result.result)
//         // console.log(result.connection)
//     })



// db.collection('users').insertMany([
//     {
//         name:'Ali',
//         age:19
//     },
//     {
//         name:'Güntaç',
//         age:21
//     }
// ], (error, result) => {
//     if(error) {
//         return console.log('Unable to insert documents!')
//     }
//     console.log(result.ops)
// })

//     db.collection('tasks').insertMany([
//         {
//             description: 'Do homework',
//             completed: false
//         },
//         {
//             description: 'Throw out the trash',
//             completed: false
//         },
//         {
//             description: 'Listen CEZA',
//             completed: true
//         }
//     ], (error, result) => {
//         if(error) {
//             return console.log('Unable to add tasks')
//         }
//         console.log(result.ops)
//         console.log(result.result)

//     })


    // db.collection('users').findOne({_id: new ObjectID('5d82260f48434709a838b76d')}, (error, user) => {
    //     if(error){
    //       return  console.log('Unable to fetch user')
    //     }       
    //     console.log(user)  
    // })

    // db.collection('users').find({ name:'Umutcan' }).toArray((error, users) => {
    //     console.log(users)
    // })

    db.collection('tasks').findOne({_id: new ObjectID('5d822beca493411e18ec4594')}, (error, task) => {
        if(error){
            return console.log('Unable to find the task')
        }
        // console.log(task)
    })

    db.collection('tasks').find({completed: false}).toArray((error,tasks) => {
        console.log(tasks)
    })

  })

    