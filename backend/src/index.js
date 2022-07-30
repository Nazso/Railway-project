require('dotenv').config();
const config = require('config');
const logger = require('./config/logger');

const app = require('./server');

const port = config.port || 3000;

console.log(config.port);

app.listen(port, () => {
    console.log(`App is listening on localhost://${port}`)
});
