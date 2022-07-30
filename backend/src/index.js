require('dotenv').config();
const config = require('config');
const logger = require('./config/logger');

const app = require('./server');

const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const port = config.port || 3000;
console.log(config.port);

if(!config.has('database')) {
    logger.console.error('No database config found!');
    process.exit();
};

const connectionString = `mongodb+srv://${config.database.user}:${config.database.password}@${config.database.host}`;

mongoose.connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    logger.info('MongoDB connection is successfull!');
}).catch((err) => {
    console.log(err);
    process.exit()
});

app.listen(port, () => {
    console.log(`App is listening on localhost://${port}`)
});
