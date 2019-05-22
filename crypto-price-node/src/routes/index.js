import express from "express";
var router = express.Router();
import axios from "axios";
import cache from "../../public/json/cache.json";
import app from "../app.js";

const axiosInstance = axios.create({
  headers: {
    "X-CMC_PRO_API_KEY": "80415b01-6c5a-4547-b5d0-f80814428492"
  }
});

// A REFACTORER AVEC DES CONTROLLEURS

/**
 * Get crypto info by marketcap and save it to a MongoDB database
 * Update its data every 5 min to limit API consumption
 */
router.get("/cryptocurrency/listings/latest", function(req, res, next) {
  const currentDate = new Date();
  // Find the lasted data in the database
  app.locals.collection
    .find()
    .sort({ "status.timestamp": -1 })
    .limit(1)
    .toArray()
    .then(result => {
      // Check if the last data more than 5 min old
      // If so, get fresh new data and save them to the MongoDB database
      if (
        new Date(result[0].status.timestamp) <
        currentDate.setMinutes(currentDate.getMinutes() - 5)
      ) {
        axiosInstance
          .get(
            "https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?start=1&limit=20&convert=USD"
          )
          .then(response => {
            app.locals.collection
              .insertOne(response.data)
              .then(result => {
                console.log("CoinMarketCap data saved to MongoDB");
              })
              .catch(error => {
                console.log(error);
              });
              res.json({ data: response.data, error: { message: "", code: "0" } });
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
          });
      } else {
        res.json({ data: result[0], error: { message: "", code: "0" } });
      }
    })
    .catch(error => {
      console.log(error);
      res.json({
        data: "",
        error: {
          message: "Error getting the data with MongoDB",
          detail: error,
          code: "1"
        }
      });
    });
});

export default router;
