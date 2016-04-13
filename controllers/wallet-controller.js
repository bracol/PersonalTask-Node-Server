'use strict'

var Wallet = require('../models/wallet-model'),
    ctrl = {};

ctrl.findAll = function(req, res) {
    Wallet.findAll()
        .then(function(wallets) {
            res.status(200).json(wallets);
        })
        .catch(function(err) {
            res.status(500).send(err);
        });
};

ctrl.findByLoginId = function(req, res) {
    Wallet.findByLoginId(req.params.id)
        .then(function(wallet) {
            res.status(200).json(wallet);
        })
        .catch(function(err) {
            res.status(404).send(err);
        });
};

ctrl.save = function(req, res) {
    Wallet.save(req.body)
        .then(function(wallet) {
            res.status(200).json(wallet);
        })
        .catch(function(err) {
          console.log(err);
            res.status(500).send(err);
        });
};

ctrl.update = function(req, res) {
    var wallet = req.body;
    wallet._id = req.params.id;

    Wallet.update(wallet)
        .then(function(data) {
            res.status(200).json(wallet);
        })
        .catch(function(err) {
            res.status(500).send(err);
        });
};

ctrl.remove = function(req, res) {
    Wallet.remove(req.params.id)
        .then(function(data) {
            res.status(200).json(wallet);
        })
        .catch(function(err) {
            res.status(500).send(err);
        });
};

module.exports = ctrl;
