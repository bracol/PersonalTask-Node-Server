'use strict'

var mongoose = require('mongoose'),
    walletSchema = new mongoose.Schema({
        value: {
            type: mongoose.Schema.Types.Number,
            required: true,
            trim: true
        },
        login_id: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            trim: true
        },
        __v: {
            type: Number,
            select: false
        }
    }),
    Wallet = mongoose.model('wallets', walletSchema);

module.exports.findAll = function findAll() {
    return new Promise(function(resolve, reject) {
        Wallet.find(function(err, data) {
            if (err) {
                console.log('findAll err: ' + err);
                reject(err);
            } else {
                console.log('findAll data: ' + data);
                resolve(data);
            }
        });
    });
};


module.exports.findByLoginId = function findByLoginId(loginId) {
    return new Promise(function(resolve, reject) {
        let query = {
            login_id: loginId
        };

        Wallet.findOne(query, function(err, data) {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        });
    });
};

module.exports.save = function save(wallet) {
    return new Promise(function(resolve, reject) {
        new Wallet(wallet).save(function(err, data) {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        });
    });
};


module.exports.update = function update(wallet) {
    return new Promise(function(resolve, reject) {
        let query = {
            _id: wallet._id
        };

        Wallet.update(query, wallet, function(err, data) {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        });
    });
};

module.exports.remove = function remove(walletId) {
    return new Promise(function(resolve, reject) {
        let query = {
                _id: walletId
            },
            mod = {
                active: false
            };

        Wallet.update(query, mod, function(err, data) {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        });
    });
};
