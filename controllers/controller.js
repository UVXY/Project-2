var controller = require("../controllers/controller.js");

module.exports = function(app, passport) {
  app.get("/signUp", controller.signUp);

  // app.get("/signUp2", controller.signup);

  app.get("/login", controller.login);

  app.get("/profile", isLoggedIn, controller.profile);

  // app.get("/matches", function (req, res) {
  //     res.render("layouts/matches");
  // });

  app.get("/logout", controller.logout);

  app.post("/signUp", passport.authenticate("local-signUp", {
    successRedirect: "/profile",

      failureRedirect: "/signUp"
  })
  ));

  // app.post("/signUp2", passport.authenticate("local-signUp", {
  //         successRedirect: "/profile",

  //         failureRedirect: "/signUp2"
  //     }

  // ));

  app.post("/login", passport.authenticate("local-login", {
    successRedirect: "/profile",

      failureRedirect: "/login"
  })
  ));

  function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) {return next();}

    res.redirect("/login");
  }
};
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
