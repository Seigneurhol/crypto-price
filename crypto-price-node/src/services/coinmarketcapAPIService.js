import axios from "axios";

const axiosInstance = axios.create({
  headers: {
    "X-CMC_PRO_API_KEY": "80415b01-6c5a-4547-b5d0-f80814428492"
  }
});

const coinmarketcapAPIService = {};

coinmarketcapAPIService.getCryptoListings = function() {
  return axiosInstance.get(
    "https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?start=1&limit=20&convert=USD"
  );
};

export default coinmarketcapAPIService;
