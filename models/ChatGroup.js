const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ChatGroupSchema = new Schema({
    subscribers: [{
        type: Schema.Types.ObjectId,
        ref: 'User'
    }],
    messages: [{
        type: Schema.Types.ObjectId,
        ref: 'Message'
    }]
})

module.exports = ChatGroup = mongoose.model('ChatGroup', ChatGroupSchema);