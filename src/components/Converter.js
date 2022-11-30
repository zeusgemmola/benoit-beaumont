import React, { useState, useEffect } from "react";

const API_KEY = "WmXzgYheCWiJUUBuZR66ygXgSLZt4S2BVDUrOcER";

const Converter = ({ valueToConvert, fromCurrency, toCurrency }) => {
  const [stateRate, setStateRate] = useState({
    isLoading: true,
    rate: 0
  });

  useEffect(() => {
    const fetchCurrency = async () => {
      const res = await fetch(
        `https://api.currencyapi.com/v3/latest?apikey=${API_KEY}&base_currency=${fromCurrency}&currencies=${toCurrency}`
      );
      const currency = await res.json();
      setStateRate({ rate: currency.data[toCurrency].value, isLoading: false });
    };
    fetchCurrency();
  }, [fromCurrency, toCurrency]);

  return <h5>Result : {valueToConvert * stateRate.rate} </h5>;
};

export default Converter;
