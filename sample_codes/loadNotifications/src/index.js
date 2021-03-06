import React from "react";
import {ethers} from "ethers";
import { Web3ReactProvider } from "@web3-react/core";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

function getLibrary(provider) {
  const gottenProvider = new ethers.providers.Web3Provider(provider, "any"); // this will vary according to whether you use e.g. ethers or web3.js
  return gottenProvider;
}

ReactDOM.render(
  <React.StrictMode>
    <Web3ReactProvider getLibrary={getLibrary}>
      <App />
    </Web3ReactProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
