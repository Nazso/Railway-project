const express = require('express');
const cors = require('cors');

const locoRoutes = require('./controllers/locomotives/loco.routes');
const commentRoutes = require('./controllers/Comments/comments.routes');

const app = express();
app.use(cors());

app.get('/', (req, res) => {
    res.send('Hello Mi!?')
});

app.use('/locomotives', locoRoutes);
app.use('/comments', commentRoutes);

module.exports = app;
