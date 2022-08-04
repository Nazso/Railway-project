const mongoose = require('mongoose');

const BuyItemSchema = new mongoose.Schema({
    username: String,
    type: String,
    little: Number,
    middle: Number,
    big: Number,
    price: Number
}, {
    timesstamps: true
});

module.exports = mongoose.model('BuyItem', BuyItemSchema);