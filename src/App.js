import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Crypto } from "./Crypto/Crypto";
import Navbar from "./Navbar/Navbar";

function App() {
  return (
    <div className="app">
      <Navbar />
      <div className="container-fluid">
        <table class="table">
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
            <tr>
              <th scope="row">1</th>
              <td>
                <div className="row align-items-center">
                  <div className="col-5">
                    <img
                      src="images/Bitcoin.png"
                      className="card-img-top"
                      alt="Bitcoin"
                    />
                  </div>
                  <div className="col-5">Bitcoin</div>
                </div>
              </td>
              <td>8000$</td>
              <td>+5%</td>
              <td>29 679 894 734$</td>
              <td>125 983 025 437$</td>
            </tr>
            <tr>
              <th scope="row align-items-center">1</th>
              <td>
                <div className="row align-items-center">
                  <div className="col-5">
                    <img
                      src="images/Ethereum.png"
                      className="card-img-top"
                      alt="Ethereum"
                    />
                  </div>
                  <div className="col-5">Ethereum</div>
                </div>
              </td>
              <td>8000$</td>
              <td>+5%</td>
              <td>29 679 894 734$</td>
              <td>125 983 025 437$</td>
            </tr>
            <tr>
              <th scope="row">1</th>
              <td>
                <div className="row align-items-center">
                  <div className="col-5">
                    <img
                      src="images/Monero.png"
                      className="card-img-top"
                      alt="Monero"
                    />
                  </div>
                  <div className="col-5">Monero</div>
                </div>
              </td>
              <td>8000$</td>
              <td>+5%</td>
              <td>29 679 894 734$</td>
              <td>125 983 025 437$</td>
            </tr>
          </tbody>
        </table>
        <Crypto />
      </div>
    </div>
  );
}

export default App;
