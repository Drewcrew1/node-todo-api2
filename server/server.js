let express = require('express');
let bodyParser = require('body-parser');

let {mongoose} = require('./db/mongoose.js');

let {Todo} = require('./models/todo');
let {User} = require('./models/user');



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


app.listen(3000, () => {
    console.log('started on port 3000');
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
