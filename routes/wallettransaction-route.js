'use strict';

var express = require('express')
  , route = express.Router()
  , ctrl = require('../controllers/wallettransaction-controller');

route.get('/wts/:id', ctrl.findByWalletId);
route.get('/wts/', ctrl.findGroupCategory);
route.post('/wts', ctrl.save);
route.put('/wts/:id', ctrl.update);
route.delete('/wts/:id', ctrl.remove);

module.exports = route;
