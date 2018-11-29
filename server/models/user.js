let mongoose = require('mongoose');
let users = mongoose.model('user', {
    email: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    }
});

module.exports = {users};