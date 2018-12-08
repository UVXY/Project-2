module.exports = function(app) {
    
  // Load index page
  app.get("/first", function(req, res) {
      res.render("login");
  });

  app.get("/profile", function(req, res) {
      res.render("layouts/profile");
  });

  app.get("/signUp", function(req, res) {
      res.render("layouts/signUp");
  });

  app.get("/signUp2", function(req, res) {
      res.render("layouts/signUp2");
  });

  app.get("/matches", function(req, res) {
      res.render("layouts/matches");
  });

};
