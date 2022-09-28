const axios = require("axios");

// Generate a API from coinranking.com
const apiKey = "coinranking5f4d45fb378f2df59332b5c0adbd1166951eedfdccfcad46";

// import price model
const PriceModel = require("../models/price");

// Create an API for fetching the price of Bitcoin in real time.

module.exports.fetchPrice = async function (req, res) {
  try {
    const fetchData = async () => {
      try {
        return axios.get(
          "https://api.coinranking.com/v2/coin/Qwsogvtv82FCd/price",
          {
            headers: {
              "Content-Type": "application/json",
              "x-access-token": `${apiKey}`,
              "Access-Control-Allow-Origin": "*",
            },
          }
        );
      } catch (error) {
        console.log(error);
      }
    };

    const getData = async () => {
      const result = await fetchData();
      const CreateData = await new PriceModel({
        price: `$${Math.round(result.data.data.price)}`,
      });

      res.status(200).json({
        BitcoinPrice: {
          price: `$${Math.round(result.data.data.price)}`,
        },
        message: "Successfully fetched real time price ",
      });
      // Every time the price of bitcoin is fetched it is stored in a database table
      CreateData.save();
    };
    getData();
  } catch (error) {
    res.status(500).json({
      status: "failure",
      type: "COIN_NOT_FOUND",
      message: "Coin not found",
    });
  }
};

// Create an API to get the list of Bitcoin prices (with pagination, 10 items per page)
module.exports.fetchListOfPrice = async function (req, res) {
  try {
    const fetchData = async () => {
      try {
        return axios.get("https://api.coinranking.com/v2/coins?limit=10", {
          headers: {
            "Content-Type": "application/json",
            "x-access-token": `${apiKey}`,
            "Access-Control-Allow-Origin": "*",
          },
        });
      } catch (error) {
        res.status(404).json({
          status: "failure",
          type: error,
          message: "ERROR IN FETCHING PRICE ",
        });
      }
    };

    const getData = async () => {
      try {
        let result = await fetchData();
        var arr = result.data.data.coins;

        var array = [];
        for (var i = 0; i < 10; i++) {
          array.push(`$${Math.round(arr[i].price)}`);
        }
        res.status(200).json({
          BitcoinPrices: {
            prices: `Price : ${array}`,
          },
        });
      } catch (error) {
        res.status(404).json({
          status: "failure",
          type: error,
          message: "ERROR IN FETCHING PRICE ",
        });
      }
    };
    getData();
  } catch (error) {
    res.status(500).json({
      status: "failure",
      type: "COIN_NOT_FOUND",
      message: "Coin not found",
    });
  }
};
