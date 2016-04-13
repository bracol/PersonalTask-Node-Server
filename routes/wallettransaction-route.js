'use strict';

var express = require('express')
  , route = express.Router()
  , ctrl = require('../controllers/wallettransaction-controller');

route.get('/wts', ctrl.findAll);
route.get('/wts/:id', ctrl.findByWalletId);
route.post('/wts', ctrl.save);
route.put('/wts/:id', ctrl.update);
route.delete('/wts/:id', ctrl.remove);

module.exports = route;
