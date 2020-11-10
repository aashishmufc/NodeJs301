const Order = require('../models/Order.model');

exports.findAll = (req, res) => {
    return new Promise((resolve, reject) => {
        Order.find()
            .then(order => {
                resolve(order);
            }).catch(err => {
                reject({
                    message: err.message || "Some error occurred while retrieving notes."
                });
            });
    })

};