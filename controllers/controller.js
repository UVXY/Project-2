var exports = module.exports = {};
require("sequelize");

exports.signUp = function (req, res) {

    res.render("signUp");

};

// exports.signUp2 = function (req, res) {

//     res.render("signUp2");

// }

exports.login = function (req, res) {

    res.render("login");

};

exports.profile = function (req, res) {

    res.render("profile");

};

exports.logout = function (req, res) {

    req.session.destroy(function (err) {

        res.redirect("/");

    });

};