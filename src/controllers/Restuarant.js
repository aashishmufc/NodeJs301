const Restuarant = require('../models/Restuarant.model');

exports.findAll = (req, res) => {
    Restuarant.find()
        .then(notes => {
            res.send(notes);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving notes."
            });
        });
};