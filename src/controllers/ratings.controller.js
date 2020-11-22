const Rating = require('../models/Rating.model');

exports.findAll = (req, res) => {
    return new Promise((resolve, reject) => {
        Rating.find()
            .then(notes => {
                resolve(notes);
            }).catch(err => {
                reject({
                    message: err.message || "Some error occurred while retrieving notes."
                });
            });
    })

};
exports.createRating = (req, res) => {
    return new Promise((resolve, reject) => {
        var new_rating = new Rating({
            "restuarantId": req.body.restuarantId,
            "customerId": req.body.customerId,
            "rating": req.body.rating
        })
        new_rating.save()
            .then(rating => {
                resolve(rating);
            }).catch(err => {
                reject({
                    message: err.message || "Some error occurred while retrieving notes."
                });
            });
    })
};
exports.updateRating = (req, res) => {
    return new Promise((resolve, reject) => {
        const ratingId = { _id: req.query.ratingId };
        Rating.findOneAndUpdate(ratingId, { $set: req.body }, { upsert: true, new: true })
            .then(order => {
                resolve(order);
            }).catch(err => {
                reject({
                    message: err.message || "Some error occurred while retrieving notes."
                });
            });
    })

};