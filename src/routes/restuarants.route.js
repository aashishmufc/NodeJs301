const RestrauntController = require('../controllers/restuarant.controller');
const express = require('express');
const bodyParser = require('body-parser');

const restrauntRouter = express.Router();
restrauntRouter.use(bodyParser.json());

restrauntRouter.route('/')
    .get((req, res) => {
        RestrauntController.findAll().then(restuarants => {
            res.json(restuarants);
        }).catch((err) => {
            res.err(err);
        })
    })

restrauntRouter.route('/filter').get((req, res) => {
    RestrauntController.searchByName(req).then(restuarants => {
        res.json(restuarants);
    }).catch((err) => {
        res.err(err)
    });
})


module.exports = restrauntRouter;