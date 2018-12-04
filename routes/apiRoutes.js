var db = require("../models");
require("sequelize");

module.exports = function(app) {
  // Get all examples
  app.get("/api/client", function(req, res) {
    db.client.findAll({}).then(function(dbExample) {
      res.json(dbExample);
    });
  });
  app.get("/api/activities", function(req, res) {
    db.activities.findAll({}).then(function(dbExample) {
      res.json(dbExample);
    });
  });

  // Create a new example
  app.post("/api/client", function(req, res) {
    db.client.create(req.body).then(function(dbExample) {
      res.json(dbExample);
    });
  });
  app.post("/api/activities", function(req, res) {
    db.activities.create(req.body).then(function(dbExample) {
      res.json(dbExample);
    });

    // Delete an example by id
    app.delete("/api/client/:id", function(req, res) {
      db.client
        .destroy({
          where: {
            id: req.params.id
          }
        })
        .then(function(dbExample) {
          res.json(dbExample);
        });
    });
  });
};
