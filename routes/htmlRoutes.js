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