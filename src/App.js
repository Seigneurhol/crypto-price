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
        <Crypto />
      </div>
    </div>
  );
}

export default App;
