const commentService = require('./comment.service');
const logger = require('../../config/logger');
const createError = require('http-errors');

exports.create = (req, res, next) => {
    const newComment = {
        username: req.body['username'],
        date: req.body['date'],
        engine: req.body['engine'],
        type: req.body['type'],
        name: req.body['name'],
        usercomment: req.body['usercomment']
    };

    return commentService.create(newComment)
        .then(comment => {
            res.status(201)
            res.json(newComment)
        })
        .catch((err) => {
            logger.error(err);
            return next(new createError.InternalServerError(err));
        })
};

exports.findAll = (req, res, next) => {
    return commentService.findAll()
        .then(comment => res.json(comment)
        )
        .catch((err) => {
            logger.error(err)
            return next(new createError.InternalServerError(err))
        })
};

exports.findOne = (req, res, next) => {
    const id = req.params.id;

    return commentService.findOne(id)
        .then(comment => {
            if(!comment) return next(new createError.NotFound(`Comment with ${id} does not exist!`))
            res.json(comment)
        })
        .catch((err) => {
            logger.error(err)
            return next(new createError.InternalServerError(err))
        })
};

exports.update = (req, res, next) => {
    const id = req.params.id;

    updatedComment = {
        username: username,
        date: date,
        engine: engine,
        type: type,
        usercomment: usercomment,
    }

    return commentService.updateOne(id, updatedComment)
        .then(comment => {
            if(!comment) return next(new createError.NotFound(`Comment with ${id} does not exist!`))
            res.json(updatedComment)
        })
        .catch((err) => {
            logger.error(err)
            return next(new createError.InternalServerError(err))
        })
}

exports.delete = (req, res, next) => {
    const id = req.params.id;

    return commentService.deleteOne(id)
        .then(comment => {
            if(!comment) return next(new createError.NotFound(`Comment with ${id} does not exist!`))
            res.json({})
        })
        .catch((err) => {
            logger.error(err)
            return next(new createError.InternalServerError(err))
        })
}
