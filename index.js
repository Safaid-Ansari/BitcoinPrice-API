const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const db = require("./config/connection");
const Price = require("./models/price");
const router = require("./routes/index");
const passport = require("passport");

const env = require("dotenv").config();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const port = process.env.PORT || 8000;
app.use(express.json());

// create default router it is baseurl
app.use("/Bitcoin", router);

app.listen(port, (error) => {
  if (error) console.log("ERROR", error);
  console.log("Our server is running at port number", port);
});
