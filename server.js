let express = require("express");
let exphbs = require("express-handlebars");
let app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('views/images')); 

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

// Set the port of our application
// process.env.PORT lets the port be set by Heroku
let PORT = process.env.PORT || 8080;

// Start our server so that it can begin listening to client requests.
app.listen(PORT, function () {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});