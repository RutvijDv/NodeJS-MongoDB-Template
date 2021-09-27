const router = require("express").Router();

//Importing routes
const home = require("./home.routes.js");

//Using routes
router.use("/", home);

//Exporting routes
module.exports = router;
