const locoController = require('./loco.controller');

const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    return locoController.findAll(req, res, next)
});

router.get('/diesel', (req, res, next) => {
    return locoController.findDiesel(req, res, next)
});

router.get('/electric', (req, res, next) => {
    return locoController.findElectric(req, res, next)
});

router.get('/:id', (req, res, next) => {
    return locoController.findOne(req, res, next)
});

module.exports = router;
