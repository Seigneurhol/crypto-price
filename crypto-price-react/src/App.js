import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Navbar/Navbar";
import getCryptoByMarketcap from "./Service/Service";
import Alert from "./Alert/Alert";
import Table from "./Table/Table";

//ICI Idée implenter une recherche et mettre une shadow autour du tableau et change en couleur
export class App extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {
    // Call the webservice to get the crypto data
    // ICI gerer les errers si y a pas de data
    getCryptoByMarketcap()
      .then(response => {
        this.setState({ crypto: response.data.data.data });
      })
      .catch(error => {
        console.log("Error", error);
      });
  }

  render() {
      // S'affiche apendant le loading du coup mettre un varaible si y a une erreur
    const AlertComp = !this.state.crypto ? <Alert /> : null;
    return (
      <div className="app">
        <Navbar />
        <div className="container-fluid">
          {AlertComp}
          <Table cryptoList={this.state.crypto} />
        </div>
      </div>
    );
  }
}

export default App;
