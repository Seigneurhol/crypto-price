import express from "express";
var router = express.Router();
import axios from "axios";
import cache from "../../public/json/cache.json";

const axiosInstance = axios.create({
  headers: {
    "X-CMC_PRO_API_KEY": "80415b01-6c5a-4547-b5d0-f80814428492"
  }
});

/**
 * Get crypto info by marketcap
 */
router.get("/cryptocurrency/listings/latest", function(req, res, next) {
  res.json({ data: cache, error: { message: "", code: "0" } });
  /*axiosInstance
    .get(
      "https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?start=1&limit=20&convert=USD"
    )
    .then(response => {
      console.log(response.data.data);
      res.json({ data: response.data.data, error: { message: "", code: "0" } });
    })
    .catch(error => {
      console.log(error);
      res.json({
        data: "",
        error: {
          message: "Error with CoinMarketCap API",
          detail: error,
          code: "1"
        }
      });
    });*/
});

export default router;