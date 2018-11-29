const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');

const {Todo} = require('./../server/models/todo');
const {users} = require('./../server/models/user');


// let id = '5c00246da8f27c2a981878011';
//
// if(!ObjectID.isValid(id)){
//     console.log('ID no valid');
// }

// Todo.find({
//     _id: id
// }).then((todos) => {
//     console.log('todos', todos);
// });
//
// Todo.findOne({
//     _id: id
// }).then((todo) => {
//     console.log('todo', todo);
// });
//
// Todo.findById(id).then((todo) => {
//     if (!todo){
//         return console.log('id not found');
//     }
//     console.log('todo by id', todo);
// }).catch((e) => {
//     console.log(e);
// });
//let id = '5bff17e5e2e01522e8fec994';
users.findById('5bff17e5e2e01522e8fec994').then((users) => {
    if (!users) {
        return console.log('user not found');
    }
    console.log(JSON.stringify(users, undefined, 2));
}, (e) => {
    console.log(e);
});