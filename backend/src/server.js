const express = require('express');
const morgan = require('morgan');
const logger = require('./config/logger');

const cors = require('cors');

const app = express();

const locoRoutes = require('./controllers/locomotives/loco.routes');
const commentRoutes = require('./controllers/comment/comment.routes');
const buyItemRoutes = require('./controllers/buyItem/buyItem.routes');
const userRoutes = require('./controllers/user/user.routes');

app.use(morgan('combined', {stream: {write: (message) => logger.info(message)}})); 

app.use(cors());

//endpoints
app.use('/locomotives', locoRoutes);
app.use('/comments', commentRoutes);
app.use('/buyitems', buyItemRoutes);
app.use('/users', userRoutes);

//error handling midlleware
app.use((err, req, res, next) => {
    logger.error(`Error ${err.statusCode}: ${err.message}`);
    res.status(err.statusCode);
    res.json({
        hasError: true,
        message: err.message
    });
});

module.exports = app;
