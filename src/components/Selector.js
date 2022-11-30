import React, { useState, useEffect } from "react";
import logo from "../AppBar.logo.svg";
import AmountInput from "./AmountInput";

const Selector = () => {
  const [fromCurrency, setFromCurrency] = useState("EUR");
  const onChangeFromCurrency = (e) => {
    setFromCurrency(e.target.value);
  };

  const [toCurrency, setToCurrency] = useState("USD");
  const onChangeToCurrency = (e) => {
    setToCurrency(e.target.value);
  };

  return (
    <div className="App">
      <header>
        <nav className="AppBar">
          <img
            className="AppBar-logo"
            src={logo}
            aria-label="people"
            alt="People"
          />
        </nav>
      </header>
      <main>
        <div className="container">
          <div className="row">
            <h3>Convertisseur</h3>
            <div className="col s8">
              <div className="row">
                <div className="col s6">
                  <label>From</label>
                  <select
                    defaultValue="EUR"
                    className="browser-default"
                    name="inputDevises"
                    id="inputDevises"
                    value={fromCurrency}
                    onChange={onChangeFromCurrency}
                  >
                    <option value="EUR">EUR</option>
                    <option value="CHF">CHF</option>
                    <option value="GBP">GBP</option>
                    <option value="USD">USD</option>
                  </select>
                </div>
                <div className="col s6">
                  <label>To</label>
                  <select
                    defaultValue="EUR"
                    className="browser-default"
                    name="outputDevises"
                    id="outputDevises"
                    value={toCurrency}
                    onChange={onChangeToCurrency}
                  >
                    <option value="EUR">EUR</option>
                    <option value="CHF">CHF</option>
                    <option value="GBP">GBP</option>
                    <option value="USD">USD</option>
                  </select>
                </div>
              </div>
              <div className="row">
                <div className="input-field col s12">
                  <AmountInput
                    fromCurrency={fromCurrency}
                    toCurrency={toCurrency}
                  />
                </div>
                <div className="input-field col s12"></div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
export default Selector;
