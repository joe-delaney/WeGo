const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const dateToAge = (birthdate) => {
    birthdate = new Date(birthdate)
    let current = new Date(Date.now());
    let age = current.getYear() - birthdate.getYear();
    if (birthdate.getMonth() > current.getMonth()) {age -= 1;}
    if (birthdate.getMonth() === current.getMonth() && birthdate.getDate() < current.getDate()) {age -= 1;}
    return age;
}

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
        get: date => dateToAge(date),
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
    location: {
        type: String,
        required: false
    },
    interestTags: {
        type: [String],
        default: []
    },
    hostedActivities: [{
        type: Schema.Types.ObjectId,
        ref: 'Activity'
    }],
    attendedActivities: [{
        type: Schema.Types.ObjectId,
        ref: 'Activity'
    }],
    allActivities: [{
        type: Schema.Types.ObjectId,
        ref: 'Activity'
    }],
    thumbsUp: {
        type: Number,
        default: 0
    },
    thumbsDown: {
        type: Number,
        default: 0
    },
    profilePhotoPath: {
        type: String,
        required: false,
        get: path => path ? path : "/api/images/41daf94ffdccb355db7a624258d02f60",
        default: "/api/images/41daf94ffdccb355db7a624258d02f60"
    },
    extraPhotoPaths: {
        type: [String],
        max: 5
    },
    approved: {
        type: Boolean,
        default: false,
        set: function() { return this.aboutMe.length > 30 && this.interestTags.length > 3 && this.profilePhotoPath; }
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

module.exports = User = mongoose.model('User', UserSchema);


