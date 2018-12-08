<<<<<<< HEAD
// var controller = require("../controllers/controller.js");
=======
var exports = module.exports = {};
require("sequelize");
>>>>>>> b68b63c8af534a84d7ad728a354633185ef7e598

// module.exports = function(app, passport) {
//   app.get("/signUp", controller.signUp);

//   // app.get("/signUp2", controller.signup);

//   app.get("/login", controller.login);

<<<<<<< HEAD
//   app.get("/profile", isLoggedIn, controller.profile);

//   // app.get("/matches", function (req, res) {
//   //     res.render("layouts/matches");
//   // });

//   app.get("/logout", controller.logout);

//   app.post("/signUp", passport.authenticate("local-signUp", {
//     successRedirect: "/profile",

//       failureRedirect: "/signUp"
//   })
//   ));
=======
// exports.signUp2 = function (req, res) {

//     res.render("signUp2");

// }

exports.login = function (req, res) {

    res.render("login");
>>>>>>> b68b63c8af534a84d7ad728a354633185ef7e598

//   // app.post("/signUp2", passport.authenticate("local-signUp", {
//   //         successRedirect: "/profile",

<<<<<<< HEAD
//   //         failureRedirect: "/signUp2"
//   //     }

//   // ));

//   app.post("/login", passport.authenticate("local-login", {
//     successRedirect: "/profile",
=======
exports.profile = function (req, res) {

    res.render("profile");

};

exports.logout = function (req, res) {
>>>>>>> b68b63c8af534a84d7ad728a354633185ef7e598

//       failureRedirect: "/login"
//   })
//   ));

//   function isLoggedIn(req, res, next) {
//     if (req.isAuthenticated()) {return next();}

//     res.redirect("/login");
//   }
// };
var exports = (module.exports = {});

exports.signUp = function(req, res) {
  res.render("signUp");
};

exports.signUp = function(req, res) {
  res.render("signUp2");
};

exports.signIn = function(req, res) {
  res.render("signIn");
};

exports.first = function(req, res) {
  res.render("first");
};
exports.logout = function(req, res) {
  req.session.destroy(function(err) {
    if (err) {
      throw err;
    }
    res.redirect("/");
  });
};
