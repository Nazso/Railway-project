const LocoModel = require('./../../model/locomotive.model');

exports.findAll = () => LocoModel.find();

exports.findDiesel = () => LocoModel.find({"engine": "Dízel"});

exports.findElectric = () => LocoModel.find({"engine": "Villamos"});

exports.findOne = (id) => LocoModel.findById(id);
