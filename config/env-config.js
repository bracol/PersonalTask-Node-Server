'use strict';

var env = {
  appName: 'personaltask',
  version: 'v1',
  port: process.env.OPENSHIFT_NODEJS_PORT || 3000,
  defaultLocale: 'en',
  defaultMessage: 'unespected-error',
  ip: process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1',
  db: {    uri: (process.env.DB_URI || process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1/') + 'personaltask',
    credentials: {
      name: process.env.DB_USER || '',
      pass: process.env.DB_PASS || ''
    }
  }
};

module.exports = env;
