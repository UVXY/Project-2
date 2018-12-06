var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    db.client.findAll({}).then(function(dbClient) {
      res.render("index", {
        msg: "Welcome!",
        clients: dbClient
      });
    });
  });

  // Load client page and pass in an client by id
  app.get("/client/:id", function(req, res) {
    db.client
      .findOne({ where: { id: req.params.id } })
      .then(function(dbClient) {
        res.render("client", {
          client: dbClient
        });
      });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
