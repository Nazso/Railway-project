const CommentModel = require('./../../model/comment.model');

exports.create = (newComment) => {
    const comment = new CommentModel(newComment)
    return comment.save()
};

exports.findAll = () => CommentModel.find().sort({"date": -1});

exports.findOne = (id) => CommentModel.findById(id);

exports.deleteOne = (id) => CommentModel.findByIdAndDelete(id);
