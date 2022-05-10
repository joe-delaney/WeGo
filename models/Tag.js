const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TagSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    interestedUsers: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: 'User'
    },
    taggedActivities: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: 'Activity'
    }
})

module.exports = Tag = mongoose.model('Tag', TagSchema);