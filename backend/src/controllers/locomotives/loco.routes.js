const express = require('express');
const controller = require('./loco.controller');
const router = express.Router();

router.get('/', (req, res, next) => {
    return controller.findAll(req, res, next)
});

router.get('/diesel', (req, res, next) => {
    return controller.findDiesel(req, res, next)
});

router.get('/electric', (req, res, next) => {
    return controller.findElectric(req, res, next)
});

router.get('/:id', (req, res, next) => {
    return controller.findOne(req, res, next)
});

module.exports = router;
