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