
const mongodb = require ('mongodb')
const MongoClient = mongodb.MongoClient
const ObjectID = mongodb.ObjectId

// const { MongoClient, ObjectID } = require('mongodb')

const connectionURL = process.env.LOCALHOST_URL
const databaseName = process.env.DATABASE_NAME

// const id = ObjectID()
// console.log(id)
// console.log(id.getTimestamp())

MongoClient.connect(connectionURL, { useNewUrlParser: true}, (error, client) => {
    if (error) {
        console.log('Unable to connect to database!')
        console.log(error)
    }

    const db = client.db(databaseName)
    console.log('Connection successful!')

    // db.collection('users').insertOne({
    //     _id: id,
    //     name: 'Arham',
    //     age: 22
    // }, (error, result) => {
    //     if (error) {
    //         return console.log("Unable to insert user")
    //     }

    //     console.log(result.ops)
    //     console.log(result)
    // })

    // db.collection('users').insertMany([
    //     {
    //         name: 'Jen',
    //         age: 28
    //     }, {
    //         name: 'Gunther',
    //         age: 27
    //     }
    // ], (error, result) => {
    //     if (error) {
    //         return console.log('Unable to insert documents')
    //     }

    //     console.log(result.ops)
    // })

    // db.collection('users').findOne({_id: new ObjectID("611b4725a1b51c3c88bb488e")}, (error, user) => {
    //     if (error) {
    //         return console.log('Unable to fetch')
    //     }

    //     console.log(user)
    // })

    // db.collection('users').find({ age: 23 }).toArray((error, users) => {
    //     console.log(users)
    // })

    // db.collection('users').find({ age: 23 }).count((error, users) => {
    //     console.log(users)
    // })

    // db.collection('tasks').insertMany([
    //     {
    //         description: 'Clean the house',
    //         completed: true 
    //     }, {
    //         description: 'Renew inspection',
    //         completed: false
    //     }, {
    //         description: 'Pot plants',
    //         completed: true
    //     }
    // ], (error, result) => {
    //     if (error) {
    //         return console.log("Unable to insert user")
    //     }
    // })

    // db.collection('tasks').findOne({_id: new ObjectID("611f4144c0586b74b5904e67")}, (error, task) => {
    //     if (error) {
    //         return console.log('Unable to fetch')
    //     }

    //     console.log(task)
    // })

    // db.collection('tasks').find({ completed: true }).toArray((error, tasks) => {
    //     console.log(tasks)
    // })

    // db.collection('users').updateOne({
    //     _id: new ObjectID("611a6298227571972011b43b")
    // }, {
    //     $inc: {
    //         age: 1
    //     }
    // }).then((result) => {
    //     console.log(result)
    // }).catch((error) => {
    //     console.log(error)
    // })

    // db.collection('tasks').updateMany({
    //     completed: false
    // }, {
    //     $set: {
    //         completed: true
    //     }
    // }).then((result) => {
    //     console.log(result)
    // }).catch((error) => {
    //     console.log(error)
    // })

    // db.collection('users').deleteMany({
    //     age: 27
    // }).then((result) => {
    //     console.log(result)
    // }).catch((error) => {
    //     console.log(error)
    // })

    db.collection('tasks').deleteOne({
        description: 'Clean the house'
    }).then((result) => {
        console.log(result)
    }).catch((error) => {
        console.log(error)
    })
})