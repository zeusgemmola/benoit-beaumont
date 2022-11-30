import { useState } from "react";
import Converter from "./Converter";

const AmountInput = ({ fromCurrency, toCurrency }) => {
  const [inputValue, setInputValue] = useState();

  const handleChange = (e) => {
    setInputValue(e.target.value.replace(/^0+/, ""));
  };

  return (
    <>
      <input
        id="amount"
        label="Montant"
        type="text"
        pattern="[0-9]*"
        className="validate"
        value={inputValue}
        onChange={handleChange}
        onBlur={handleChange}
      />
      <span
        className="helper-text"
        data-error="erreur"
        data-success="valide"
      ></span>
      <label> Montant </label>
      <Converter
        valueToConvert={inputValue}
        fromCurrency={fromCurrency}
        toCurrency={toCurrency}
      />
    </>
  );
};

export default AmountInput;
