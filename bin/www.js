'use strict';

var http = require('http')
  , app = require('../app')
  , env = require('../config/env-config');
  //, debug = require('../config/debug-config')('http');

// Criamos o servidor http com o gerenciador de rotas do nosso app
var httpServer = http.createServer(app);

httpServer.listen(env.port, function() {
  //debug('Servidor escutando a porta ' + env.port);
});
