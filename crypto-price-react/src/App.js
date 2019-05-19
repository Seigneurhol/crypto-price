import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Navbar/Navbar";
import getCryptoByMarketcap from "./Service/Service";
import Alert from "./Alert/Alert";
import Table from "./Table/Table";
import SearchBar from "./SearchBar/SearchBar";

export class App extends Component {
  constructor(props) {
    super(props);

    this.state = { input: "" };

    this.handleChange = this.handleChange.bind(this);
  }

  /**
   * Call the webservice to get the crypto data
   */
  componentDidMount() {
    getCryptoByMarketcap()
      .then(response => {
        this.setState({
          crypto: response.data.data.data,
          cryptoFiltered: response.data.data.data
        });
      })
      .catch(error => {
        this.setState({ error: error });
        console.log("Error", error);
      });
  }

  /**
   * Filter crypto by user input in the search bar
   * @param {string} event 
   */
  handleChange(event) {
    const input = event.target.value;
    if (input) {
      const cryptoFiltered = this.state.crypto.filter(crypto =>
        crypto.name.toLowerCase().includes(input.toLowerCase())
      );
      this.setState({ cryptoFiltered: cryptoFiltered, input: input });
    } else {
      this.setState({ cryptoFiltered: this.state.crypto, input: input });
    }
  }

  /**
   * Render the App component
   */
  render() {
    const AlertComp = this.state.error ? <Alert /> : null;
    return (
      <div className="app">
        <Navbar />
        <div className="container">
          <SearchBar value={this.state.input} handleChange={this.handleChange}/>
          {AlertComp}
          <Table cryptoList={this.state.cryptoFiltered} />
        </div>
      </div>
    );
  }
}

export default App;
