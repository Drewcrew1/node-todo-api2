//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');



MongoClient.connect('mongodb://localhost:27017/TodoApp1', (err, client) => {
    if(err){
      return  console.log('Unable to connect to mongodb server');
    }

    console.log('connected to mongodb server');
     const db = client.db('TodoApp1');
    // db.collection('Todos1').insertOne({
    //     text: 'something to do now',
    //     completed: false
    // }, (err, result) => {
    //    if (err){
    //        return console.log('unabel to insert todo',err);
    //    }
    //    console.log(JSON.stringify(result.ops));
    // });
    // db.collection('Users1').insertOne({
    //
    //     name: 'drew',
    //     age: 25,
    //     location: 'Carlisle'
    // }, (err, result) => {
    //     if (err){
    //         return console.log('unable to insert users', err);
    //     }
    //     console.log(result.ops[0]._id.getTimestamp());
    // });

    client.close();
});
