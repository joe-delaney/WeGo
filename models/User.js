const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }, 
    fname: {
        type: String,
        required: true
    },
    lname: {
        type: String,
        required: true
    },
    age: {
        type: Integer,
        required: true
    },
    pronouns: {
        type: String,
        required: false
    },
    jobTitle: {
        type: String,
        required: false
    },
    education: {
        type: String,
        required: false
    },
    interests: {
        type: String,
        required: false
    }
}, {
    timestamps: true
})

module.exports = User = mongoose.model('User', UserSchema);