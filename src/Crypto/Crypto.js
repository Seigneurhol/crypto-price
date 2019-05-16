import React, { Component } from "react";
import "./Crypto.css";

// Déplacer chacune des cartes dans une classe crypto et le deck dans App
function Crypto(props) {
  return (
    <tr>
      <th scope="row">{props.info.index}</th>
      <td>
        <div className="row align-items-center">
          <div className="col-5">
            <img
              src={props.info.imageURL}
              className="card-img-top"
              alt={props.info.name}
            />
          </div>
          <div className="col-5">{props.info.name}</div>
        </div>
      </td>
      <td>{props.info.price}</td>
      <td>{props.info.change}</td>
      <td>{props.info.volume}</td>
      <td>{props.info.marketcap}</td>
    </tr>
  );
}

export default Crypto;
