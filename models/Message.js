const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MessageSchema = new Schema({
    text: {
        type: String,
        required: true,
    },
    author: {
        type: Schema.Types.ObjectId,
        ref: 'User' 
    },
    chatGroup: {
        type: Schema.Types.ObjectId,
        ref: 'ChatGroup'
    }
})

module.exports = Message = mongoose.model('Message', MessageSchema);