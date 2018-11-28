//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');



MongoClient.connect('mongodb://localhost:27017/TodoApp1', (err, client) => {
    if(err){
        return  console.log('Unable to connect to mongodb server');
    }

    console.log('connected to mongodb server');
    const db = client.db('TodoApp1');

    // db.collection('Todos1').findOneAndUpdate({
    //     _id: new ObjectID('5bfecc352608e8dd4ae8365a')
    // }, {
    //     $set: {
    //         completed: true
    //     }
    // }, {
    //     returnOriginal: false
    // }).then((result) => {
    //     console.log(result);
    // });

    db.collection('Users1').findOneAndUpdate({
        _id: new ObjectID('5bfdac85de4bcf3a74c1ab63')
    }, {
        $set: {
            name: 'Drew'
        },
        $inc: {
            age: 1
        }
    }, {
        returnOriginal: false
    }).then((result) => {
        console.log(result);
    });
    //client.close();
});