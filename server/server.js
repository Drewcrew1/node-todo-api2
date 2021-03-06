let express = require('express');
let bodyParser = require('body-parser');
let {ObjectID} = require('mongodb');
let {mongoose} = require('./db/mongoose.js');

let {Todo} = require('./models/todo');
let {User} = require('./models/user');

const port = process.env.PORT || 3000;

let app = express();

app.use(bodyParser.json());



app.post('/todos', (req, res) => {
   let todo = new Todo({
       text: req.body.text
   });

   todo.save().then((doc) => {
       res.send(doc);
   }, (e) => {
       res.status(400).send(e);
   });
});

app.get('/todos', (req, res) => {
   Todo.find().then((todos) => {
res.send({todos});
   }, (e) => {
res.status(400).send(e);
   });
});

app.get('/todos/:id', (req, res) => {
   let id = req.params.id;

    if(!ObjectID.isValid(id)){
    return res.status(404).send();
 }
    Todo.findById(id).then((todo) => {
    if (!todo){
         return res.status(404).send();
     }
     res.send({todo});
 }).catch((e) => {
     res.status(400).send();
 });


});

app.listen(port, () => {
    console.log(`started up at ${port}`);
});

//
// newTodo.save().then((doc) => {
//     console.log('saved to do', doc);
// }, (e) => {
//     console.log('unable to save todo');
// });

// let nextTodo = new Todo({
//     text: 'learn more',
//     completed: false,
//     completedAt: new Date()
// });

// let newuser = new user({
//     email: 'drew@drew.com'
// });
//
// newuser.save().then((doc) => {
//     console.log('saved user', doc);
// }, (e) => {
//     console.log("unable to save user");
// });

module.exports = {app};
