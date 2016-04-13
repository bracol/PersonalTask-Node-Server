'use strict'

var User = require('../models/user-model'),
    ctrl = {};

module.exports.authenticate = function authenticate(name, password) {
    return new Promise(function(resolve, reject) {
        let _query = {
            name: name,
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

ctrl.getUserInfo = function getUserInfo(req, res, next) {
    var user = req.user;
    delete user.password;
    User.findOne(user)
        .then(function(user) {
            res.status(200).json(user);
        });
    //new success.FindOne(user).send(req, res);
};


ctrl.save = function(req, res) {
    User.save(req.body)
        .then(function(user) {
            res.status(200).json(user);
        })
        .catch(function(err) {
          console.log(err);
            res.status(500).send(err);
        });
};

module.exports = ctrl;
