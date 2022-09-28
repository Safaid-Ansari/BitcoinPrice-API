const mongoose = require("mongoose");

// Create a Price Schema   
const BitcoinSchema = new mongoose.Schema({
  price: {
    type: String,
    required: true,
  },
});

const BitcoinPrice = new mongoose.model("BitcoinPrice", BitcoinSchema);

module.exports = BitcoinPrice;
