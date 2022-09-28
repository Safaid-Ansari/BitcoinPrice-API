const User = require("../models/user");
const fs = require("fs");
const path = require("path");

// let's keep it same as before

// // render the sign in page
module.exports.signIn = function (req, res) {
  return res.redirect("/Bitcoin/price");
};

// get the sign up data
module.exports.create = function (req, res) {
  if (req.body.password != req.body.confirm_password) {
    res.status(403).send("error", "Passwords do not match");
    return res.redirect("back");
  }

  User.findOne({ email: req.body.email }, function (err, user) {
    if (err) {
      res.status(500).send("error", err);
      return;
    }

    if (!user) {
      User.create(req.body, function (err, user) {
        if (err) {
          res.status(403).send("error", err);
          return;
        }

        return res.redirect("/users/sign-in");
      });
    } else {
      res.status(201).send("success you have signup | continue to login ");
      return res.redirect("back");
    }
  });
};
