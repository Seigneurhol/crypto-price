import React, { Component } from "react";
import axios from "axios";

const axiosInstance = axios.create({
  headers: {
    "X-CMC_PRO_API_KEY": "80415b01-6c5a-4547-b5d0-f80814428492"
  }
});

// ICI Create a Class for web services ? Refactor
// Faire l'appel via mon back end pour enelver l'erreur CORS
// Trop compliqué par Chrome faire via Node.js
// Et faire un cache si possible via Node.js
function getCryptoByMarketcap(callback) {
  axiosInstance
    .get("http://localhost:3001/cryptocurrency/listings/latest")
    .then(response => {
      console.log(response);
      callback(response);
    })
    .catch(error => {
      console.log(error);
      callback(error);
    });
}

export default getCryptoByMarketcap;
