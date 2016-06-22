'use strict';

var mongoose = require('mongoose'),
    schema = new mongoose.Schema({
        name: {
            type: mongoose.Schema.Types.String,
            required: true,
            trim: true
        },
        userName: {
            type: mongoose.Schema.Types.String,
            required: true,
            trim: true
        },
        password: {
            type: mongoose.Schema.Types.String,
            required: true,
            trim: true
        },
        __v: { type: Number, select: false}
    }),
    User = mongoose.model('User', schema);

module.exports.authenticate = function authenticate(userName, password) {
    return new Promise(function(resolve, reject) {
        let _query = {
            userName: userName,
            password: password
        };

        User.findOne(_query, function(err, user) {
            if (err) {
                reject(err);
            } else {
                if (user) {
                    resolve(user);
                } else {
                    reject(err);
                }
            }
        });

    });
};

module.exports.findOne = function findOne(user) {
  return new Promise(function(resolve, reject) {
      let _query = {
          userName: user.userName
      };
      User.findOne(_query, function(err, user) {
          if (err) {
              reject(err);
          } else {
              if (user) {
                  resolve(user);
              } else {
                  reject(err);
              }
          }
      });

  });
}

module.exports.findAll = function findAll() {
    return new Promise(function(resolve, reject) {
        User.find(function(err, data) {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        });
    });
};


module.exports.findById = function findById(userId) {
    return new Promise(function(resolve, reject) {
        let query = {
            _id: userId
        };

        User.findOne(query, function(err, data) {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        });
    });
};

module.exports.save = function save(user) {
    return new Promise(function(resolve, reject) {
        new User(user).save(function(err, data) {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        });
    });
};


module.exports.update = function update(user) {
    return new Promise(function(resolve, reject) {
        let query = {
            _id: user._id
        };

        User.update(query, user, function(err, data) {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        });
    });
};

module.exports.remove = function remove(userId) {
    return new Promise(function(resolve, reject) {
        let query = {
                _id: userId
            },
            mod = {
                active: false
            };

        User.update(query, mod, function(err, data) {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        });
    });
};
