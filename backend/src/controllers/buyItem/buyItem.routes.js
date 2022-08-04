const buyItemController = require('./buyItem.controller');

const express = require('express');
const router = express.Router();

router.post('/', (req, res, next) => {
    return buyItemController.create(req, res, next)
});

router.get('/', (req, res, next) => {
    return buyItemController.findAll(req, res, next)
});

router.get('/:id', (req, res, next) => {
    return buyItemController.findOne(req, res, next)
});

router.delete('/:id', (req, res, next) => {
    return buyItemController.deleteOne(req, res, next)
});

module.exports = router;
