const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();
const passport = require("passport");
const userController = require("../controllers/userController");
// create user router for create a user
router.post("/create", userController.create);

// create sign-in router for login user
router.get("/sign-in", userController.signIn);

// export router
module.exports = router;
