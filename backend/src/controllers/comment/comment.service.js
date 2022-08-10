const CommentModel = require('./../../model/comment.model');

exports.create = (commentData) => {
    const comment = new CommentModel(commentData);
    return comment.save();
}

exports.findAll = () => CommentModel.find().sort({"date": -1});

exports.findOne = (id) => CommentModel.findById(id);

exports.updateOne = (id, updatedComment) => CommentModel.findByIdAndUpdate(id, updatedComment); 

exports.deleteOne = (id) => CommentModel.findByIdAndDelete(id);
