import React, { Component } from "react";
import "./Crypto.css";

// Déplacer chacune des cartes dans une classe crypto et le deck dans App
export class Crypto extends Component {
  render() {
    return (
      <div className="crypto">
        <div className="card-deck">
          <div className="card">
            <div class="align-self-center">
              <img
                src="images/Bitcoin.png"
                className="card-img-top"
                alt="Bitcoin"
              />
            </div>
            <div className="card-body">
              <h5 className="card-title">Bitcoin</h5>
              <p className="card-text">
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
              <p className="card-text">
                <small className="text-muted">Last updated 3 mins ago</small>
              </p>
            </div>
          </div>
          <div className="card">
            <div class="align-self-center">
              <img
                src="images/Ethereum.png"
                className="card-img-top"
                alt="Ethereum"
              />
            </div>
            <div className="card-body">
              <h5 className="card-title">Ethereum</h5>
              <p className="card-text">
                This card has supporting text below as a natural lead-in to
                additional content.
              </p>
              <p className="card-text">
                <small className="text-muted">Last updated 3 mins ago</small>
              </p>
            </div>
          </div>
          <div className="card">
            <div class="align-self-center">
              <img
                src="images/Monero.png"
                className="card-img-top"
                alt="Monero"
              />
            </div>
            <div className="card-body">
              <h5 className="card-title">Monero</h5>
              <p className="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This card has even longer content
                than the first to show that equal height action.
              </p>
              <p className="card-text">
                <small className="text-muted">Last updated 3 mins ago</small>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Crypto;
