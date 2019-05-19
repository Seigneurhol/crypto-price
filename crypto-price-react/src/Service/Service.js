import React, { Component } from "react";
import axios from "axios";

const axiosInstance = axios.create({
  headers: {
    "X-CMC_PRO_API_KEY": "80415b01-6c5a-4547-b5d0-f80814428492"
  }
});

/**
 * Call the webservice to get crypto data
 */
async function getCryptoByMarketcap() {
  return new Promise((resolve, reject) => {
    axiosInstance
      .get("http://localhost:3001/cryptocurrency/listings/latest")
      .then(response => {
        resolve(response);
      })
      .catch(error => {
        reject(error);
      });
  });
}

export default getCryptoByMarketcap;
