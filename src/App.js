import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Crypto from "./Crypto/Crypto";
import Navbar from "./Navbar/Navbar";

export class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      crypto: [
        {
          index: 1,
          name: "Bitcoin",
          imageURL: "images/Bitcoin.png",
          price: "$8000",
          change: "+5%",
          volume: "$29 679 894 734",
          marketcap: "$125 983 025 437"
        },
        {
          index: 2,
          name: "Ethereum",
          imageURL: "images/Ethereum.png",
          price: "$8000",
          change: "+5%",
          volume: "$29 679 894 734",
          marketcap: "$125 983 025 437"
        },
        {
          index: 3,
          name: "Monero",
          imageURL: "images/Monero.png",
          price: "$8000",
          change: "+5%",
          volume: "$29 679 894 734",
          marketcap: "$125 983 025 437"
        }
      ]
    };
  }
  render() {
    return (
      <div className="app">
        <Navbar />
        <div className="container-fluid">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Nom</th>
                <th scope="col">Prix</th>
                <th scope="col">Change</th>
                <th scope="col">Volume</th>
                <th scope="col">Capitalisation du marché</th>
              </tr>
            </thead>
            <tbody>
              {this.state.crypto.map(crypto => (
                <Crypto info={crypto} key={crypto.index} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default App;
