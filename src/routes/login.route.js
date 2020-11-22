const express = require('express');
const bodyParser = require('body-parser');
const LoginController = require('../controllers/login.controller');

const loginRouter = express.Router();
loginRouter.use(bodyParser.json());

loginRouter.route('/')
    .post((req, res) => {
        LoginController.login(req).then(creds => {
            res.json(creds);
        }).catch((err) => {
            res.send(err);
        })
    });
module.exports = loginRouter;