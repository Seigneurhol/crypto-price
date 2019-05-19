import React from "react";
import Crypto from "../Crypto/Crypto";

/**
 * Render the Table component
 * @param {*} props 
 */
function Table(props) {
  return props.cryptoList ? (
    <div className="cryptoList light-shadow">
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Price</th>
            <th scope="col">Change (24h)</th>
            <th scope="col">Volume (24h)</th>
            <th scope="col">Market Cap</th>
          </tr>
        </thead>
        <tbody>
          {props.cryptoList
            ? props.cryptoList.map(crypto => (
                <Crypto info={crypto} key={crypto.id} />
              ))
            : null}
        </tbody>
      </table>
    </div>
  ) : null;
}

export default Table;
