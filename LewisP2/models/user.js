var orm = require('../config/orm.js');

var client = {
  selectAll: function(cb) {
    orm.selectAll('client', function(res) {
      cb(res);
    });
  },

  selectAll: function(cb) {
    orm.selectAll('activities', function(res) {
      cb(res);
    });
  },

  insertOne: function(cols, vals, cb) {
    orm.insertOne('client', cols, vals, function(res) {
      cb(res);
    });
  },

  insertOne: function(cols, vals, cb) {
    orm.insertOne('activities', cols, vals, function(res) {
      cb(res);
    });
  },

  updateOne: function(objColVals, condition, cb) {
    orm.updateOne('client', objColVals, condition, function(res) {
      cb(res);
    });
  },

  updateOne: function(objColVals, condition, cb) {
    orm.updateOne('activities', objColVals, condition, function(res) {
      cb(res);
    });
  }
};

module.exports = client;