'use strict';

var env = {
  appName: 'personaltask',
  version: 'v1',
  port: 3000,
  defaultLocale: 'en',
  defaultMessage: 'unespected-error',
  db: {
    uri: process.env.DB_URI || 'mongodb://localhost/personalTask',
    credentials: {
      name: process.env.DB_USER || '',
      pass: process.env.DB_PASS || ''
    }
  }
};

module.exports = env;
