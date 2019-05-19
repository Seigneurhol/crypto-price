import React, { Component } from "react";
import "./Crypto.css";

/**
 * Format price with USD
 * @param {number} number 
 */
function formatPrice(number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    useGrouping: "true"
  }).format(number);
}

/**
 * Format large number with Billion, Million and Kilo
 * @param {number} number 
 */
function formatLargePrice(number) {
  if (Math.abs(number) >= 1000000000) {
    return formatPrice(number / 1000000000) + "B";
  } else if (Math.abs(number) >= 1000000) {
    return formatPrice(number / 1000000) + "M";
  } else if (Math.abs(number) >= 1000) {
    return formatPrice(number / 1000) + "K";
  } else {
    return formatPrice(number);
  }
}

/**
 * Format percentage number with %
 * @param {number} number 
 */
function formatPercentage(number) {
  return new Intl.NumberFormat("en-US", {
    maximumFractionDigits: 2,
    style: "percent"
  }).format(number / 100);
}

/**
 * Return the class name for positive and negative percentage
 * @param {number} percentage 
 */
function colorClass(percentage){
    return percentage < 0 ? "red" : "green"
}

/**
 * Render the Crypto component
 * @param {*} props 
 */
function Crypto(props) {
  return (
    <tr>
      <th scope="row">{props.info.cmc_rank}</th>
      <td>
        <div className="row align-items-center">
          <div className="col-5">
            <img
              src={"/images/" + props.info.name + ".png"}
              className="card-img-top"
              alt={props.info.name}
            />
          </div>
          <div className="col-5">{props.info.name}</div>
        </div>
      </td>
      <td>{formatPrice(props.info.quote.USD.price)}</td>
      <td className={colorClass(props.info.quote.USD.percent_change_24h)}>{formatPercentage(props.info.quote.USD.percent_change_24h)}</td>
      <td>{formatLargePrice(props.info.quote.USD.volume_24h)}</td>
      <td>{formatLargePrice(props.info.quote.USD.market_cap)}</td>
    </tr>
  );
}

export default Crypto;
