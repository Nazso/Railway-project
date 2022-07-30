const mongoose = require('mongoose');

const LocomotiveSchema = new mongoose.Schema({
    type: { type: String, required: true },
    name: { type: String, required: true },
    url: { type: String, required: true },
    manufacturer: { type: String, required: true },
    wheelArrangement: { type: String, required: true },
    numberOfAxels: { type: Number, required: true },
    engine: { type: String, required: true },
    topSpeed: { type: String, required: true },
    power: { type: String, required: true },
    transmission: { type: String },
    cylinderArrangement: { type: Number },
    typeOfElectricity: { type: String },
    details: { type: String, required: true }
}, {
    timestamps: true
});

module.exports = mongoose.model('Locomotive', LocomotiveSchema);
