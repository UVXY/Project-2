var express = require("express");
var exphbs = require("express-handlebars");

var app = express();
var PORT = process.env.PORT || 3000;

app.engine(
    "handlebars",
    exphbs({
      default: "index"
    })
  );
  app.set("view engine", "handlebars");
  app.use(express.static(__dirname + '/public'));
  
  // Routes
  require("./routes/htmlRoutes")(app);

  app.listen(PORT, function() {
      console.log("listening at PORT: " + PORT)
  })

  module.exports = app;