'use strict';

var express = require('express')
  , route = express.Router()
  , ctrl = require('../controllers/wallettransaction-controller');

route.get('/wts/', ctrl.findAll);
route.get('/wts/sum/:wallet_id/:year/:month', ctrl.findSumMounth);
route.get('/wts/group/:wallet_id/:year/:month', ctrl.findGroupCategory);
route.get('/wts/:id', ctrl.findByWalletId);
route.post('/wts', ctrl.save);
route.put('/wts/:id', ctrl.update);
route.delete('/wts/:id', ctrl.remove);

module.exports = route;
