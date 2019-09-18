// CRUD create read update delete

const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient

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
//         // console.log(result.insertedId)
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

    db.collection('tasks').insertMany([
        {
            description: 'Do homework',
            completed: false
        },
        {
            description: 'Throw out the trash',
            completed: false
        },
        {
            description: 'Listen CEZA',
            completed: true
        }
    ], (error, result) => {
        if(error) {
            return console.log('Unable to add tasks')
        }
        console.log(result.ops)
        console.log(result.result)

    })

 })