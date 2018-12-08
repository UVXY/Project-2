var express = require("express");
var exphbs = require("express-handlebars");
var bodyParser = require("body-parser");
var env = require("dotenv").load();
var passport = require("passport");
var session = require("express-session");

var app = express();
var PORT = process.env.PORT || 3000;
var db = require("./models");
var ngrok = require('ngrok');
(async function () {
  const url = await ngrok.connect(8080);
})();

//For BodyParser
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

// For Passport

app.use(session({
  secret: "keyboard cat",
  resave: true,
  saveUninitialized: true
})); // session secret

app.use(passport.initialize());

app.use(passport.session()); // persistent login sessions

// ========== Lewis==================

app.engine(

  "handlebars",
  exphbs({
    default: "index"
  }));

app.set("view engine", "handlebars");
app.use(express.static(__dirname + "/public"));

//Sample GET request
app.get("/", function (req, res) {
  res.send("Welcome to Passport with Sequelize");
});

//Sample POST request
app.post("/", function (req, res) {

});


// Routes
require("./routes/htmlRoutes")(app, passport);
// ========== Lewis==================
"handlebars",
  exphbs({
    defaultLayout: "main"
  });
app.set("view engine", "handlebars");

// Routes
// require("./routes/activitiesApiRoutes")(app, passport);
// require("./routes/clientsApiRoutes")(app, passport);
require("./routes/htmlRoutes")(app, passport);

//load passport strategies
require("./config/passport/passport.js")(passport, db.user);

var syncOptions = { force: false };

// If running a test, set syncOptions.force to true
// clearing the `testdb`
if (process.env.NODE_ENV === "test") {
  syncOptions.force = true;
}

db.sequelize.sync(syncOptions).then(function () {
  app.listen(PORT, function () {
    console.log("Listening at port: " + PORT);
  });

  if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
  } else {
    connection = mysql.createConnection({
      host: "qbct6vwi8q648mrn.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
      user: "xxv3syghjv40glom",
      password: "a3c3j0bv86age6ys",
      database: "c6582kbicyrg855t"
    });
  }

  module.exports = app;
});
