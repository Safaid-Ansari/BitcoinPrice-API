const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const db = require("./config/connection");
const Price = require("./models/price");
const router = require("./routes/index");
const passport = require("passport");
require("dotenv").config();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const port = process.env.PORT || 8000;
app.use(express.json());

// create default router it is baseurl

app.use("/Bitcoin", router);
app.get("/", (req, res) => {
  res.send(
    "<body style='background-color:cyan'><h1 style='text-align:center; font-size:50px'>Welcome to Bitcoin Price Tracker </h1></body>"
  );
});
app.get("*", (req, res) => {
  res.send(
    "<body style='background-color:cyan'><h1 style='text-align:center; font-size:50px'>ERROR 404 </h1></body>"
  );
});

app.listen(port, (error) => {
  if (error) console.log("ERROR", error);
  console.log("Our server is running at port number", port);
});
