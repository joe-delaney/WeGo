const mongoose = require('mongoose');
const Schema = mongoose.Schema;


// How much info above and beyond the id's will we need to embed?
// look up n+1 query

const ActivitySchema = new Schema({
    title: {
        type: String,
        required: true,
        index: true
    },
    time: {
        type: Date,
        required: true
    },
    host: {
        type: Schema.Types.ObjectId,
        ref: 'users'
    },
    requestedAttendees: [{
        type: Schema.Types.ObjectId,
        ref: 'users'
    }],
    approvedAttendees: [{
        type: Schema.Types.ObjectId,
        ref: 'users'
    }],
    deniedAttendees: [{
        type: Schema.Types.ObjectId,
        ref: 'users'
    }],
    tag: {
        type: String,
        require: false
    },
    location: {
        type: String,
        require: true
    },
    description: {
        type: String,
        required: false
    },
    price: {
        type: Number,
        required: true
    },
    duration: {
        type: Number,
        required: true
    },
    capacity: {
        type: Number,
        required: true
    },
    closed: {
        type: Boolean,
        default: false
    }
}, {
    timestamps: true
});


module.exports = Activity = mongoose.model('Activity', ActivitySchema);