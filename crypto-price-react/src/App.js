import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Crypto from "./Crypto/Crypto";
import Navbar from "./Navbar/Navbar";
import getCryptoByMarketcap from "./Service/Service";

//ICI Idée implenter une recherche et mettre une shadow autour du tableau et change en couleur
export class App extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {
    // Call the webservice to get the crypto data
    // ICI gerer les errers si y a pas de data
    getCryptoByMarketcap(reponse => {
      this.setState({ crypto: reponse.data.data.data });
    });
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
                <th scope="col">Name</th>
                <th scope="col">Price</th>
                <th scope="col">Change (24h)</th>
                <th scope="col">Volume (24h)</th>
                <th scope="col">Market Cap</th>
              </tr>
            </thead>
            <tbody>
              {this.state.crypto
                ? this.state.crypto.map(crypto => (
                    <Crypto info={crypto} key={crypto.id} />
                  ))
                : null}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default App;
