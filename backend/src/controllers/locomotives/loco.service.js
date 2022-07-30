const Loco = require('./../../model/locomitives.model');

exports.findAll = () => Loco.find();

exports.findDiesel = () => Loco.find({"engine": "Dízel"});

exports.findElectric = () => Loco.find({"engine": "Villamos"});

exports.findOne = (id) => Loco.findById(id);
