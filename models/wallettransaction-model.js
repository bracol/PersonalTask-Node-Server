'use strict';

var mongoose = require('mongoose'),
    schema = new mongoose.Schema({
        desc: {
            type: mongoose.Schema.Types.String,
            required: true,
            trim: true
        },
        date: {
            type: mongoose.Schema.Types.Date,
            required: true,
            trim: true
        },
        price: {
            type: mongoose.Schema.Types.Number,
            required: true,
            trim: true
        },
        category: {
            type: mongoose.Schema.Types.String,
            required: true,
            trim: true
        },
        wallet_id: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            trim: true
        },
        __v: {
            type: Number,
            select: false
        }
    }),
    WalletTransaction = mongoose.model('WalletTransaction', schema);


module.exports.findAll = function findAll() {
    return new Promise(function(resolve, reject) {
        WalletTransaction.find(function(err, data) {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        });
    });
};


module.exports.findByWalletId = function findByWalletId(walletTransactionId) {
    return new Promise(function(resolve, reject) {
        let query = {
            wallet_id: walletTransactionId
        };

        WalletTransaction.find(query, function(err, data) {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        });
    });
};

module.exports.save = function save(walletTransaction) {
    return new Promise(function(resolve, reject) {
        new WalletTransaction(walletTransaction).save(function(err, data) {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        });
    });
};


module.exports.update = function update(walletTransaction) {
    return new Promise(function(resolve, reject) {
        let query = {
            _id: walletTransaction._id
        };

        WalletTransaction.update(query, walletTransaction, function(err, data) {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        });
    });
};

module.exports.remove = function remove(walletTransactionId) {
    return new Promise(function(resolve, reject) {
        let query = {
                _id: walletTransactionId
            },
            mod = {
                active: false
            };

        WalletTransaction.update(query, mod, function(err, data) {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        });
    });
};
