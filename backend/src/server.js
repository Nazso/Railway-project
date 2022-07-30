const express = require('express');
const cors = require('cors');

const app = express();

const locoRoutes = require('./controllers/locomotives/loco.routes');

app.use('/locomotives', locoRoutes);

module.exports = app;
