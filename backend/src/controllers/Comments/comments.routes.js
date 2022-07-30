const express = require('express');
const controller = require('./comments.controller');
const router = express.Router();

router.get('/', (req, res, next) => {
    return controller.findAll(req, res, next)
});

module.exports = router;
