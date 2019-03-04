const express = require("express");
const helmet = require("helmet");
const bodyParser = require("body-parser");
const cors = require("cors");
const logger = require("morgan");
const passport = require("passport");
const CONFIG = require("../config/config");
const routes = require("./routes");
const errorHandler = require("./error-handler").handler();

// Initiate our app
const app = express();

// Register middlewares
app.use(helmet()); // helps secure the app by setting various HTTP headers
app.use(logger("dev")); // log HTTP Request
app.use(cors()); // bypass the Same Origin Policy and allows AJAX requests from remote host as frontend.
app.use(bodyParser.json()); // only parses JSON bodies.
app.use(bodyParser.urlencoded({extended: false})); //  only parses urlencoded bodies.

// Passport
app.use(passport.initialize());

//Log Env
console.log("Environment:", CONFIG.app);

// DataBase
const models = require("./models");
models.sequelize
  .authenticate()
  .then(() => {
    console.log("Connected to SQL database:", CONFIG.db_name);
  })
  .catch(err => {
    console.error("Unable to connect to SQL database:", CONFIG.db_name, err);
  });

if (CONFIG.app === "dev") {
  models.sequelize.sync(); //creates SQL table if they do not already exist (check Sequelize Models and SQL Tables are syncro)
}

// Define routes
app.use("/api", routes);

// catch 404(NotFound) and forward to error handler
app.use((req, res, next) => {
  let err = new Error("Not Found");
  err.status = 404;
  next(err);
});

// Basic error handling middleware
app.use(errorHandler);

module.exports = app;
