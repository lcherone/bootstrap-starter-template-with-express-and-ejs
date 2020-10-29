const express = require("express");
const app = express();

/**
 * Pull in some configs etc, package.json has some values
 */
app.set("package", require("../package.json"));

// set view engine
app.set("view engine", "ejs");
app.set("views", "./src/views");

// set base static path (serves your ./public files as-is)
app.use("/static", express.static(__dirname + "/public"));

// NO build tools.. lets stay with the PHP way and just serve static files
// - set vendor static path (defines a route to the modules dist as-is)
//
// jquery
app.use(
  "/static/vendor/jquery",
  express.static(__dirname + "/../node_modules/jquery/dist")
);
//
// bootstrap
// - set vendor static path (defines a route to the modules dist as-is)
app.use(
  "/static/vendor/bootstrap",
  express.static(__dirname + "/../node_modules/bootstrap/dist")
);

// main routes

// index page
app.use("/", require("./routes/index"));

// about page
app.use("/about", require("./routes/about"));

// start server
app.listen(process.env.PORT, () =>
  console.log(`Server listening on port ${process.env.PORT}!`)
);
