const router = require("express").Router();
const User = require("./../models/user.model");

router.get("/", (req, res) => {
  res.render("index.ejs");
});

router.post("/", (req, res) => {
  const user = new User({ name: req.body.name, age: req.body.age });

  user
    .save()
    .then(() => {
      res.redirect("/");
    })
    .catch((err) => {
      console.log("Error Saving user");
      res.redirect("/");
    });
});

module.exports = router;
