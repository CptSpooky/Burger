//dependencies
const express = require("express");
const exphbs = require("express-handlebars");

const app = express();

const PORT = process.env.PORT || 8081;

// express handlebars
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// Import routes 
var routes = require("./controllers/burgers_controller.js");

app.use("/", routes);

// Server listen
app.listen(PORT, function() {
  console.log("App now listening at localhost:" + PORT);
});
