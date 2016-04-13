'use strict';

var express = require('express')
  , route = express.Router()
  , ctrl = require('../controllers/user-controller')
  , basicAuth = require('../filters/basic-auth-filter');

route.get('/users', basicAuth, ctrl.getUserInfo);
route.post('/users', ctrl.save);
module.exports = route;
