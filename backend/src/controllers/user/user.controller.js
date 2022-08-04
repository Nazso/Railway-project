const userService = require('./user.service');

const createError = require('http-errors');
const logger = require('../../config/logger');

exports.create = (req, res, next) => {

    const newUser = {
    username: req.body['username'],
    email: req.body['email'],
    password: req.body['password'],
    role: req.body['role'],
    };

    return userService.create(newUser)
        .then(user => {
            res.status(201)
            res.json(newUser)
        })
        .catch((err) => {
            logger.error(err)
            return next(new createError.InternalServerError(err))
        })
};

exports.findAll = (req, res, next) => {
    return userService.findAll()
        .then(user => res.json(user))
        .catch((err) => {
            logger.error(err)
            return next(new createError.InternalServerError(err))
        })
};

exports.findOne = (req, res, next) => {

    const id = req.params.id;

    return userService.findOne(id)
        .then(user => {
            if(!user) return next(new createError.NotFound(`User does not exist with ${id} id!`))
            res.json(user)
        })
        .catch((err) => {
            logger.error(err)
            return next(new createError.InternalServerError(err))
        })
};

exports.update = (req, res, next) => {

    const id = req.params.id;

    const newUser = {
    username: req.body['username'],
    email: req.body['email'],
    password: req.body['password'],
    role: req.body['role'],
    };

    return userService.update(id, newUser)
        .then(user => {
            if(!user) return next(new createError.NotFound(`User does not exist with ${id} id!`))
            res.json(newUser)
        })
        .catch((err) => {
            logger.error(err)
            return next(new createError.InternalServerError(err))
        })
};

exports.delete = (req, res, next) => {
    
    const id = req.params.id;

    return userService.deleteOne(id)
        .then(user => {
            if(!user) return next(new createError.NotFound(`User does not exist with ${id} id!`))
            res.json({})
        })
        .catch((err) => {
            logger.error(err)
            return next(new createError.InternalServerError(err))
        })
};
