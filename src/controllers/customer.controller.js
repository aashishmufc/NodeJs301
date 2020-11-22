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
exports.createCustomer = (req, res) => {
    return new Promise((resolve, reject) => {
        var new_customer = new Customer({
            "name": req.body.name,
            "age": req.body.age,
            "phone": req.body.phone,
            "email": req.body.email,
            "city": req.body.city,
            "orders": [],
            "status": "active"
        })
        new_customer.save()
            .then(order => {
                resolve(order);
            }).catch(err => {
                reject({
                    message: err.message || "Some error occurred while retrieving notes."
                });
            });
    })
};
exports.updateCustomer = async (req, res) => {
    console.log('in controller', req.query)
    const customerId = { _id: req.query.customerId };
    return await Customer.findOneAndUpdate(customerId, { $set: req.body }, { upsert: true, new: true })
        .then(order => {
            return order;
        }).catch(err => {
            return ({
                message: err.message || "Some error occurred while retrieving notes."
            });
        });

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