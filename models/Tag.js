const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TagSchema = new Schema({
    title: {
        type: String,
        required: true,
        index: true
    },
    img: {
        type: String,
        required: true
    }
});

module.exports = Tag = mongoose.model('Tag', TagSchema);