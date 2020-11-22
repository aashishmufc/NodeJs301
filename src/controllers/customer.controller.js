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
exports.deactivateCustomer = async (req) => {
    const update = { status: 'deactivated' };
    return await Customer.findByIdAndUpdate(req.query.id, update, { new: true })
        .then(order => {
            return (order);
        }).catch(err => {
            return ({
                message: err.message || "Some error occurred while retrieving notes."
            });
        });
}