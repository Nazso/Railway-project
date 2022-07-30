const mongoose = require('mongoose');

const CommentSchema = new mongoose.Schema({
    username: {type: String, required: true},
    date: {type: String, required: true},
    engine: {type: String, required: true},
    type: {type: String, required: true},
    name: {type: String, required: true},
    usercomment: {type: String, required: true}
}, {
    timestamps: true
});

module.exports = mongoose.model('Comment', CommentSchema);
