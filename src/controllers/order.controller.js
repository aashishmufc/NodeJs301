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
exports.viewUserOrder = (req, res) => {
    return new Promise((resolve, reject) => {
        Order.findOne({ customerId: req.query.id })
            .then(order => {
                resolve(order);
            }).catch(err => {
                reject({
                    message: err.message || "Some error occurred while retrieving notes."
                });
            });
    })

};
exports.placeOrder = (req, res) => {
    return new Promise((resolve, reject) => {
        var new_order = new Order({
            "status": "processing",
            "customerId": req.body.customerId,
            "restuarantId": req.body.restuarantId,
            "items": req.body.items,
            "totalprice": "6788"
        })
        new_order.save({ customerId: req.query.id })
            .then(order => {
                resolve(order);
            }).catch(err => {
                reject({
                    message: err.message || "Some error occurred while retrieving notes."
                });
            });
    })
};
exports.updateOrder = (req, res) => {
    return new Promise((resolve, reject) => {
        const orderId = { _id: req.query.orderId };
        var updated_order = {
            "status": req.body.status,
            "customerId": req.body.customerId,
            "restuarantId": req.body.restuarantId,
            "items": req.body.items,
            "totalprice": "6788"
        };
        Order.findOneAndUpdate(orderId, { $set: req.body}, { upsert: true, new: true })
            .then(order => {
                resolve(order);
            }).catch(err => {
                reject({
                    message: err.message || "Some error occurred while retrieving notes."
                });
            });
    })

};
exports.cancelOrder = async (req) => {
    const orderId = { _id: req.query.orderId };
    var updated_order = {
        "status": "cancelled",
        "customerId": req.body.customerId,
        "restuarantId": req.body.restuarantId,
        "items": req.body.items,
        "totalprice": "6788"
    };
    return await Order.findOneAndUpdate(orderId, updated_order, { upsert: true, new: true })
        .then(order => {
            return (order);
        }).catch(err => {
            return ({
                message: err.message || "Some error occurred while retrieving notes."
            });
        });

};