const locoService = require("./loco.service");
const logger = require('./../../config/logger');
const createError = require('http-errors');

exports.findAll = (req, res, next) => {
    return locoService.findAll()
        .then(loco => res.json(loco))
        .catch((err) => {
            logger.error(err);
            return next(new createError.InternalServerError(err));
        });
};

exports.findDiesel = (req, res, next) => {
    return locoService.findDiesel()
        .then(loco => res.json(loco))
        .catch((err) => {
            logger.error(err);
            return next(new createError.InternalServerError(err));
        });
};

exports.findElectric = (req, res, next) => {
    return locoService.findElectric()
        .then(loco => res.json(loco))
        .catch((err) => {
            logger.error(err);
            return next(new createError.InternalServerError(err));
        });
};

exports.findOne = (req, res, next) => {
    const id = req.params.id;

    return locoService.findOne(id)
        .then(loco => res.json(loco))
        .catch((err) => {
            logger.error(err);
            return next(new createError.InternalServerError(err));
        });
};
