import app from "../app";
import coinmarketcapAPIService from "../services/coinmarketcapAPIService";

const cryptoService = {};

/**
 * Get the crypto data from MongoDB if the data is recent
 * or get new data from the API and save it to MongoDB
 */
cryptoService.getAllCrypto = function() {
  return new Promise((resolve, reject) => {
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
          result.length <= 0 ||
          new Date(result[0].status.timestamp) <
            currentDate.setMinutes(currentDate.getMinutes() - 5)
        ) {
            getCryptoDataFromApi(resolve, reject, coinmarketcapAPIService.getCryptoListings());
          //return coinmarketcapAPIService.getCryptoListings();
        } else {
            sendCryptoDataFromDB(resolve, { data: result[0], error: { message: "", code: "0" } });
          //return resolve({ data: result[0], error: { message: "", code: "0" } });
        }
      }).catch(error => {
        console.log(error);
        reject({
          data: "",
          error: {
            message: "Error getting the data with MongoDB",
            detail: error,
            code: "1"
          }
        });
      });
  });
};

/**
 * Get crypto data from API and save it to MongoDB
 * @param {*} resolve 
 * @param {*} reject 
 * @param {*} promise 
 */
function getCryptoDataFromApi(resolve, reject, promise){
    promise.then(response => {
        resolve({
          data: response.data,
          error: { message: "", code: "0" }
        });
        return app.locals.collection.insertOne(response.data);
      })
      .then(console.log("CoinMarketCap data saved to MongoDB"))
      .catch(error => {
        console.log(error);
        reject({
          data: "",
          error: {
            message: "Error getting the crypto data",
            detail: error,
            code: "1"
          }
        });
      });
}

/**
 * Send saved crypto data from MongoDB
 * @param {*} resolve 
 * @param {*} json 
 */
function sendCryptoDataFromDB(resolve, json){
    resolve(json);
}

export default cryptoService;
