import cryptoService from "../services/cryptoService";

const cryptoController = {};

/**
 * Get crypto info by marketcap and save it to a MongoDB database
 * Update its data every 5 min to limit API consumption
 */
cryptoController.fetchCrypto = function(req, res, next) {
  cryptoService
    .getAllCrypto()
    .then(jsonResult => {
      res.json(jsonResult);
    })
    .catch(jsonError => {
      res.json(jsonError);
    });
};

export default cryptoController;
