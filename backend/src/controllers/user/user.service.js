const User = require('../../model/user.model');

exports.create = (newUser) => {
    const user = new User(newUser)
    return user.save()
};

exports.findAll = () => User.find().sort({'username': 1});

exports.findOne = (id) => User.findById(id);

exports.update = (id, newUser) => User.findByIdAndUpdate(id, newUser);

exports.deleteOne = (id) => User.findByIdAndDelete(id);
