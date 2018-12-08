var express = require("express");
var exphbs = require("express-handlebars");
var bodyParser = require("body-parser");

var app = express();
var PORT = process.env.PORT || 3000;
var db = require("./models");

app.use(bodyParser.urlencoded({ extended: false }));
// ========== Lewis==================
app.engine(
  "handlebars",
  exphbs({
    default: "index"
  })
);

app.set("view engine", "handlebars");
// app.use(express.static(__dirname + "/public"));

// //Sample GET request
// app.get("/", function (req, res) {

// });

// //Sample POST request
// app.post("/", function (req, res) {

// });

// // Routes
// require("./routes/htmlRoutes")(app);
// ========== Lewis==================
// "handlebars",
// exphbs({
//   defaultLayout: "main"
// });
// app.set("view engine", "handlebars");

// Routes
require("./routes/activitiesApiRoutes")(app);
require("./routes/clientsApiRoutes")(app);
require("./routes/htmlRoutes")(app);

var syncOptions = { force: false };

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: "qbct6vwi8q648mrn.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    user: "nzv2rbodpblxq6sq",
    password: "j1i267hskdb5sten",
    database: "izs4ojo9g1een9r9"
  });
}

// If running a test, set syncOptions.force to true
// clearing the `testdb`
if (process.env.NODE_ENV === "test") {
  syncOptions.force = true;
}

db.sequelize.sync(syncOptions).then(function() {
  app.listen(PORT, function() {
    console.log("Listening at port: " + PORT);
  });

  module.exports = app;
});
