'use strict';

var db = require('./config/db-config')
  , express = require('express')
  , bodyParser = require('body-parser')
  , app = express()
  , routeConfig = require('./config/route-config');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//app.use(basicAuth);

routeConfig.configApiRoutes(app);

module.exports = app;
