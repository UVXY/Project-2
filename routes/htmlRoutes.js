<<<<<<< HEAD
module.exports = function (app) {

    // Load index page
    app.get("/", function (req, res) {
        res.render("login");
    });

    app.get("/profile", function (req, res) {
        res.render("layouts/profile");
    });

    app.get("/signUp", function (req, res) {
        res.render("layouts/signUp");
    });

    app.get("/signUp2", function (req, res) {
        res.render("layouts/signUp2");
    });

    app.get("/matches", function (req, res) {
        res.render("layouts/matches");
    });
=======
// var controller = require("../controllers/controller.js");

// module.exports = function (app, passport) {

//     // Load index page
//     app.get("/login", controller.login, function (req, res) {
//         res.render("login");
//     });

//     // app.get("/profile", isLoggedIn, controller.profile, function (req, res) {
//     //     res.render("layouts/profile");
//     // });

//     app.get("/profile", isLoggedIn, function (req, res) { res.render(controller.profile) });

//     app.get("/signUp", controller.signUp, function (req, res) {
//         res.render("/signUp");
//     });

//     // app.get("/signUp2", controller.signUp2, function (req, res) {
//     //     res.render("layouts/signUp2");
//     // });

//     app.get("/matches", function (req, res) {
//         res.render(controller.matches);
//     });

//     app.post("/signUp", passport.authenticate("local-signUp", {
//         successRedirect: "/profile",

//         failureRedirect: "/signUp"
//     }

//     ));

//     // app.post("/signUp2", passport.authenticate("local-signUp2", {
//     //     successRedirect: "layouts/profile",

//     //     failureRedirect: "layouts/signUp2"
//     // }

//     // ));

//     app.post("/login", passport.authenticate("local-login", {
//         successRedirect: "/profile",

//         failureRedirect: "/s"
//     }

//     ));

//     function isLoggedIn(req, res, next) {

//         if (req.isAuthenticated())

//             return next();

//         res.redirect("/login");

//     }

// };


var controller = require("../controllers/controller.js");
// var controllers = require("../controllers/controllers.js");

module.exports = function (app, passport) {

    app.get("/signUp", controller.signUp);

    // app.get("/signUp2", controller.signUp2);

    app.get("/login", controller.login);

    app.get("/profile", isLoggedIn, controller.profile);

    // app.get("/matches", function (req, res) {
    //     res.render("layouts/matches");
    // });

    app.get("/logout", controller.logout);

    app.post("/signUp", passport.authenticate("local-signUp", {
        successRedirect: "/profile",

        failureRedirect: "/signUp"
    }

    ));

    // app.post("/signUp2", passport.authenticate("local-signUp2", {
    //     successRedirect: "/profile",

    //     failureRedirect: "/signUp"
    // }

    // ));

    app.post("/login", passport.authenticate("local-login", {
        successRedirect: "/profile",

        failureRedirect: "/login"
    }

    ));

    function isLoggedIn(req, res, next) {

        if (req.isAuthenticated())

            return next();

        res.redirect("/login");

    }
>>>>>>> b68b63c8af534a84d7ad728a354633185ef7e598

};

// var db = require("../models");

// module.exports = function(app) {
//   // Load index page
//   app.get("/first", function(req, res) {
//     db.clients.findAll({}).then(function(dbClients) {
//       res.render("login", {
//         msg: "Welcome!",
//         clients: dbClients
//       });
//     });
//   });

//   // Load clients page and pass in an clients by id
//   app.get("/clients/:id", function(req, res) {
//     db.clients.findOne({ where: { id: req.params.id } }).then(function(dbClient) {
//       res.render("clients", {
//         clients: dbClient
//       });
//     });
//   });

//   // Render 404 page for any unmatched routes
//   app.get("*", function(req, res) {
//     res.render("404");
//   });
// };