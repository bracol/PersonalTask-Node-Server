'use strict';

var env = {
  appName: 'academy-manager',
  version: 'v1',
  port: process.env.OPENSHIFT_NODEJS_PORT || 8080,
  defaultLocale: 'en',
  defaultMessage: 'unespected-error',
  db: {
      process.env.OPENSHIFT_MONGODB_DB_URL + db_name;
    uri: (process.env.DB_URI || process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1/') + 'personaltask',
    credentials: {
      name: process.env.DB_USER || '',
      pass: process.env.DB_PASS || ''
    }
  }
};

module.exports = env;
