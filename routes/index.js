const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();
const price = require("../controllers/priceControlar");

// create price router for fetching price of bitcoin crypto
router.get("/price", price.fetchPrice);

// create PriceWithPagination router for fetching prices  of bitcoin crypto
router.get("/price/all", price.fetchListOfPrice);

// user middleware
router.use("/users", require("./user"));

// export router
module.exports = router;
