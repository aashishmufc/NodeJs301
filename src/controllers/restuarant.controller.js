const Restuarant = require('../models/Restuarant.model');

exports.findAll = (req, res) => {
    return new Promise((resolve, reject) => {
        Restuarant.find()
            .then(notes => {
                resolve(notes);
            }).catch(err => {
                reject({
                    message: err.message || "Some error occurred while retrieving notes."
                });
            });
    })

};