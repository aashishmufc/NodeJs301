const Customer = require('../models/Customer.model');

exports.findAll = (req, res) => {
    return new Promise((resolve, reject) => {
        Customer.find()
            .then(order => {
                resolve(order);
            }).catch(err => {
                reject({
                    message: err.message || "Some error occurred while retrieving notes."
                });
            });
    })

};