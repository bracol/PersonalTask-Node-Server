'use strict'

var WalletTransaction = require('../models/walletTransaction-model'),
    ctrl = {};

ctrl.findAll = function(req, res) {
    WalletTransaction.findAll()
        .then(function(walletTransactions) {
            res.status(200).json(walletTransactions);
        })
        .catch(function(err) {
            res.status(500).send(err);
        });
};

ctrl.findByWalletId = function(req, res) {
    WalletTransaction.findByWalletId(req.params.id)
        .then(function(walletTransaction) {
            res.status(200).json(walletTransaction);
        })
        .catch(function(err) {
            res.status(404).send(err);
        });
};

ctrl.findGroupCategory = function(req, res) {
    WalletTransaction.findGroupCategory(req.params.wallet_id, req.params.year, req.params.month)
        .then(function(categorygroup) {
            res.status(200).json(categorygroup);
        })
        .catch(function(err) {
            res.status(404).send(err);
        });
};

ctrl.save = function(req, res) {
    WalletTransaction.save(req.body)
        .then(function(walletTransaction) {
            res.status(200).json(walletTransaction);
        })
        .catch(function(err) {
          console.log(err);
            res.status(500).send(err);
        });
};

ctrl.update = function(req, res) {
    var walletTransaction = req.body;
    walletTransaction._id = req.params.id;

    WalletTransaction.update(walletTransaction)
        .then(function(data) {
            res.status(200).json(walletTransaction);
        })
        .catch(function(err) {
            res.status(500).send(err);
        });
};

ctrl.remove = function(req, res) {
    WalletTransaction.remove(req.params.id)
        .then(function(data) {
            res.status(200).json(walletTransaction);
        })
        .catch(function(err) {
            res.status(500).send(err);
        });
};

module.exports = ctrl;
