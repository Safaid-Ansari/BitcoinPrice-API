const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://SafaidAnsari:iBcR2P7fTHF4UZBx@cluster0.vmqnisk.mongodb.net/Bitcoin-Price",
  // "mongodb://localhost:27017/ECommerce-API",
  { useNewUrlParser: true, useUnifiedTopology: true }
);

const db = mongoose.connection;

db.on("error", console.error.bind(console, "Error connecting to mongoDB"));

db.once("open", function () {
  console.log("Connect to mongoDB successfully ");
});

module.exports = db;
