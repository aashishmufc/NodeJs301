const RatingController = require('../controllers/ratings.controller');
const express = require('express');
const bodyParser = require('body-parser');

const restrauntRouter = express.Router();
restrauntRouter.use(bodyParser.json());

restrauntRouter.route('/')
    .get((req, res) => {
        RatingController.findAll().then(ratings => {
            res.json(ratings);
        }).catch((err) => {
            res.err(err);
        })
    })

module.exports = restrauntRouter;