var db = require("../models");

module.exports = function(app) {
  app.get("/api/clients", function(req, res) {
    db.clients.findAll({}).then(function(dbClients) {
      res.json(dbClients);
    });
  });

  app.get("/api/clients/:id", function(req, res) {
    db.clients
      .findOne({
        where: {
          id: req.params.id
        }
      })
      .then(function(dbClients) {
        res.json(dbClients);
      });
  });

  app.post("/api/clients", function(req, res) {
    db.clients.create(req.body).then(function(dbClients) {
      res.json(dbClients);
    });
  });

  app.delete("/api/clients/:id", function(req, res) {
    db.clients
      .destroy({
        where: {
          id: req.params.id
        }
      })
      .then(function(dbClients) {
        res.json(dbClients);
      });
  });
};
