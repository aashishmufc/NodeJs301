const RatingController = require('../controllers/ratings.controller');
const express = require('express');
const bodyParser = require('body-parser');

const ratingsRouter = express.Router();
ratingsRouter.use(bodyParser.json());

ratingsRouter.route('/')
    .get((req, res) => {
        RatingController.findAll().then(ratings => {
            res.json(ratings);
        }).catch((err) => {
            res.err(err);
        })
    })
ratingsRouter.route('/create')
    .post((req, res) => {
        RatingController.createRating(req).then(ratings => {
            res.json(ratings);
        }).catch((err) => {
            res.json(err);
        })
    })
ratingsRouter.route('/update')
    .put((req, res) => {
        RatingController.updateRating(req).then(ratings => {
            res.json(ratings);
        }).catch((err) => {
            res.json(err);
        })
    })

module.exports = ratingsRouter;