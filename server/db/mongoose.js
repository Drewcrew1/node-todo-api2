let mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://<drewcrew1>:<drewcar1>@ds121834.mlab.com:21834/node-api1'|| 'mongodb://localhost:27017/TodoApp1');

module.exports = {
    mongoose: mongoose

};