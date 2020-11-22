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
ordersRouter.route('/placeorder')
    .post((req, res) => {
        OrdersController.placeOrder(req).then(orders => {
            res.json(orders);
        }).catch((err) => {
            res.send(err);
        })
    })
ordersRouter.route('/update')
    .put((req, res) => {
        OrdersController.updateOrder(req).then(orders => {
            res.json(orders);
        }).catch((err) => {
            res.send(err);
        })
    })
ordersRouter.route('/cancel')
    .put((req, res) => {
        // console.log('in route', req);
        OrdersController.cancelOrder(req).then(orders => {
            res.json(orders);
        }).catch((err) => {
            res.send(err);
        })
    })
ordersRouter.route('/viewOrder')
    .get((req, res) => {
        OrdersController.viewUserOrder(req).then(orders => {
            res.json(orders);
        }).catch((err) => {
            res.send(err);
        })
    })

module.exports = ordersRouter;