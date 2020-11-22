const CustomerController = require('../controllers/customer.controller');
const express = require('express');
const bodyParser = require('body-parser');

const customersRouter = express.Router();
customersRouter.use(bodyParser.json());

customersRouter.route('/')
    .get((req, res) => {
        CustomerController.findAll().then(customers => {
            res.json(customers);
        }).catch((err) => {
            res.send(err);
        })
    });
customersRouter.route('/deactivateCustomer')
    .get((req, res) => {
        CustomerController.deactivateCustomer(req).then(customers => {
            res.json(customers);
        }).catch((err) => {
            res.send(err);
        })
    });
module.exports = customersRouter;