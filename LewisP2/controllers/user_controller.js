var express = require('express');
var router = express.Router();

var user = require('../models/user.js');

router.get('/profile', function(req, res) {
  user.selectAll(function(data) {
    var hbsObject = {
      client: data
    };
    // console.log(hbsObject);
    res.render('profile', hbsObject);
  });
});

router.post('/signUp', function(req, res) {
  user.insertOne([
    'email', 'name', 'password'
  ], [
    req.body.burger_name
  ], function(data) {
    res.redirect('/');
  });
});

router.put('/burgers/:id', function(req, res) {
  var condition = 'id = ' + req.params.id;

  user.updateOne({
    devoured: true
  }, condition, function(data) {
    res.redirect('/');
  });
});

module.exports = router;