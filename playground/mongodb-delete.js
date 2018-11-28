//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');



MongoClient.connect('mongodb://localhost:27017/TodoApp1', (err, client) => {
    if(err){
        return  console.log('Unable to connect to mongodb server');
    }

    console.log('connected to mongodb server');
    const db = client.db('TodoApp1');

    // db.collection('Users1').deleteMany({
    //     name: 'drew'
    // }).then((result) => {
    //     console.log(result);
    // });
    db.collection('Users1').findOneAndDelete({
        _id: new ObjectID('5bfdac03c3532532c0943d7b')
    }).then((result) => {
        console.log(result);
    });

    //client.close();
});