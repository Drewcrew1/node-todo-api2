//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');



MongoClient.connect('mongodb://localhost:27017/TodoApp1', (err, client) => {
    if(err){
        return  console.log('Unable to connect to mongodb server');
    }

    console.log('connected to mongodb server');
    const db = client.db('TodoApp1');

    // db.collection('Todos1').find({
    //     _id: new ObjectID('5bfd97f72d53b522a063e260')
    // }).toArray().then((docs) => {
    // console.log('Todos1');
    // console.log(JSON.stringify(docs, undefined, 2));
    // }, (err) => {
    //     console.log('unable to fetch todos.')
    // });
    // db.collection('Todos1').find().count().then((count) => {
    //     console.log(`Todos1 count: ${count} `);
    //
    // }, (err) => {
    //     console.log('unable to fetch todos.')
    // });
    db.collection('Users1').find({
        name: 'drew'
    }).toArray().then((docs) =>{
        console.log('Users1');
        console.log(JSON.stringify(docs, undefined, 2));
    }, (err) => {
        console.log('unable to fetch users');
    });


    //client.close();
});
