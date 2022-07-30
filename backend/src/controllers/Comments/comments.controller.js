const createError = require('http-errors');
const logger = require('./../../config/logger');
const commentService = require('./comments.service');

exports.findAll = (req, res, next) => {
    return commentService.findAll()
        .then(comment => res.json(comment))
        .catch((err) => {
            logger.error(err);
            return next(new createError.InternalServerError(err));
        });
};
