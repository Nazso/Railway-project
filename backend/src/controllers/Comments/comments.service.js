const Comment = require('./../../model/comments.model');

exports.findAll = () => Comment.find().sort({date: -1});
