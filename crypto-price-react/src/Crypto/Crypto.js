import React, { Component } from "react";
import "./Crypto.css";

function formatPrice(number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    useGrouping: "true"
  }).format(number);
}

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

function formatNumber(number) {
  return new Intl.NumberFormat("en-US", { maximumFractionDigits: 2 }).format(
    number
  );
}

function formatPercentage(number) {
  return new Intl.NumberFormat("en-US", {
    maximumFractionDigits: 2,
    style: "percent"
  }).format(number / 100);
}

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
      <td>{formatPercentage(props.info.quote.USD.percent_change_24h)}</td>
      <td>{formatLargePrice(props.info.quote.USD.volume_24h)}</td>
      <td>{formatLargePrice(props.info.quote.USD.market_cap)}</td>
    </tr>
  );
}

export default Crypto;
