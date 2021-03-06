// CRUD create read update delete

const {MongoClient, ObjectID} = require('mongodb')
const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'  

MongoClient.connect(connectionURL, {useNewUrlParser: true, useUnifiedTopology: true} , (error, client) => {
    if(error) {
        return console.log('Unable to connect to database')
    }
    
    const db = client.db(databaseName)



    //                                       CREATE PART 



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


        //                                READ PART



    // db.collection('users').findOne({_id: new ObjectID('5d82260f48434709a838b76d')}, (error, user) => {
    //     if(error){
    //       return  console.log('Unable to fetch user')
    //     }       
    //     console.log(user)  
    // })

    // db.collection('users').find({ name:'Umutcan' }).toArray((error, users) => {
    //     console.log(users)
    // })

    // db.collection('tasks').findOne({_id: new ObjectID('5d822beca493411e18ec4594')}, (error, task) => {
    //     if(error){
    //         return console.log('Unable to find the task')
    //     }
    //     console.log(task)
    // })
        // toArray method is important for rewrite documents in console otherwise it writes cursor.
    // db.collection('tasks').find({completed: false}).toArray((error,tasks) => {
    //     console.log(tasks)
    // })


    //                                  UPDATE PART


    // const updatePromise = db.collection('users').updateOne({
    //     _id: new ObjectID('5d8227627445842c38bc8a88')
    // }, {
    //     // UPDATE OPERATORS  
    //     // $set: {
    //     //     name: 'Bora'
    //     // }
    //         $inc: {
    //             age: -5
    //         }
    // })
    // updatePromise.then((result) => {
    //     console.log(result)
    // }).catch((error) => {
    //     console.log(error)
    // }) 

    // db.collection('tasks').updateMany({completed:false},{
    //     $set : {
    //         completed: true
    //     }
    // }).then((result) => {
    //     console.log(result.modifiedCount)
    // }).catch((error) => {
    //     console.log(error)
    // })


    //                                 DELETE PART


    // db.collection('users').deleteMany({
    //     age:19
    // }).then((result) => {
    //     console.log(result.deletedCount)
    // }).catch((error) => {
    //     console.log(error)
    // })
    // db.collection('tasks').deleteOne({
    //     description: 'Throw out the trash'
    // }).then((result) => {
    //     console.log(result)
    // }).catch((error) => {
    //     console.log(error)
    // })
})
