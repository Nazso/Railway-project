const BuyItems = require('../../model/buyItem.model');

exports.create = (newItem) => {
    const item = new BuyItems(newItem)
    return item.save()
};

exports.findAll = () => BuyItems.find().sort({'date': -1});

exports.findOne = (id) => BuyItems.findById(id);

exports.deleteOne = (id) => BuyItems.findByIdAndDelete(id);
