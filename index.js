//Imports
const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
const morgan = require("morgan");
const bodyParser = require("body-parser");

//Database Configuration
const dbConfig = require("./config/database.config");
mongoose
  .connect(dbConfig.url, {
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("MongoDB Connected");
  })
  .catch((err) => {
    console.log("Error connectig MongoDB", err);
  });

//Port
const PORT = process.env.PORT || 8080;

//Express setup
app.use(morgan("dev"));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());

//Routes
const routes = require("./routes");
app.use("/", routes);

//Error Handler
function errorHandler(err, req, res, next) {
  if (res.headersSent) {
    return next(err);
  }
  res.status(500);
  res.render("error", { error: err });
}

//Launch server
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
