'use strict';

var express = require('express')
  , route = express.Router()
  , ctrl = require('../controllers/wallet-controller');

route.get('/wallets', ctrl.findAll);
route.get('/wallets/:id', ctrl.findByLoginId);
route.post('/wallets', ctrl.save);
route.put('/wallets/:id', ctrl.update);
route.delete('/wallets/:id', ctrl.remove);

module.exports = route;
