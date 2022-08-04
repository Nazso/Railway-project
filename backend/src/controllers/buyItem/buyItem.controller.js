const buyItemService = require('./buyItem.service');

const createError = require('http-errors');
const logger = require('../../config/logger');

exports.create = (req, res, next) => {

    const newItem = {
    username: req.body['username'] ,
    type: req.body['type'] ,
    little: req.body['little'] ,
    middle: req.body['middle'] ,
    big: req.body['big'] ,
    price: req.body['price'] 
    };

    return buyItemService.create(newItem)
        .then(item => {
            res.status(201)
            res.json(newItem)
        })
        .catch((err) => {
            logger.error(err)
            return next(new createError.InternalServerError(err))
        })
};

exports.findAll = (req, res, next) => {
    return buyItemService.findAll()
        .then(item => res.json(item))
        .catch((err) => {
            logger.error(err)
            return next(new createError.InternalServerError(err))
        })
};

exports.findOne = (req, res, next) => {

    const id = req.params.id;

    return buyItemService.findOne(id)
        .then(item => {
            if(!item) return next(new createError.NotFound(`Item does not exist with ${id} id!`))
            res.json(item)
        })
        .catch((err) => {
            logger.error(err)
            return next(new createError.InternalServerError(err))
        })
};

exports.deleteOne = (req, res, next) => {

    const id = req.params.id;

    return buyItemService.deleteOne(id)
        .then(item => {
            if(!item) return next(new createError.NotFound(`Item does not exist with ${id} id!`))
            res.json({})
        })
        .catch((err) => {
            logger.error(err)
            return next(new createError.InternalServerError(err))
        })

};
