module.exports = function(app) {
    
    // Load index page
    app.get("/", function(req, res) {
        res.render("index");
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

};