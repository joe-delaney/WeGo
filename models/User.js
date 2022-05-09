const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    email: {
        type: String,
        required: true,
        index: true
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
        type: String,
        required: true,
        // get: date => dateToAge(date),
    },
    aboutMe: {
        type: String,
        default: "Tell everyone about yourself!",
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
    interestTags: {
        type: [String],
        default: []
    },
    thumbsUp: {
        type: Number,
        default: 0
    },
    thumbsDown: {
        type: Number,
        default: 0
    },
    approved: {
        type: Boolean,
        default: false,
        set: function() { return this.aboutMe.length > 30 && this.interestTags.length > 3; }
    },
    rating: {
        type: Boolean,
        default: true,
        set: function() {
            if (this.thumbsUp + this.thumbsDown < 10) return true;
            if (this.thumbUp < (3 * this.thumbsDown)) return false;
            return true;
         }
    }
}, {
    timestamps: true
});

// const dateToAge = (birthdate) => {
//     const current = Date.now();
//     let age = birthdate.getFullYear() - current.getFullYear();
//     if (birthdate.getMonth() < current.getMonth()) {age -= 1;}
//     if (birthdate.getMonth() === current.getMonth() && birthdate.getDate() < current.getDate()) {age -= 1;}
//     return age;
// }

module.exports = User = mongoose.model('User', UserSchema);
