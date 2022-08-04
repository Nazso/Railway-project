const commentController = require('./comment.controller');

const express = require('express');
const router = express.Router();

router.post('/', (req, res, next) => {
    return commentController.create(req, res, next);
});

router.get('/', (req, res, next) => {
    return commentController.findAll(req, res, next);
});

router.get('/:id', (req, res, next) => {
    return commentController.findOne(req, res, next);
});

router.delete('/:id', (req, res, next) => {
    return commentController.delete(req, res, next)
});

module.exports = router;
