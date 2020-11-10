const OrdersController = require('../controllers/order.controller');
const express = require('express');
const bodyParser = require('body-parser');

const ordersRouter = express.Router();
ordersRouter.use(bodyParser.json());

ordersRouter.route('/')
    .get((req, res) => {
        OrdersController.findAll().then(orders => {
            res.json(orders);
        }).catch((err) => {
            res.send(err);
        })
    })

module.exports = ordersRouter;