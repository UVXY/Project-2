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
