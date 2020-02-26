import { useState, useEffect } from 'react';

const useCurrencyRates = () => {
  const [currencyRates, setCurrencyRates] = useState({ USD: 0, EUR: 0, GBP: 0 });

  useEffect(() => {
    async function fetchCurrencyRates() {
      const response = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json');
      return response.json();
    }

    const getCurrencyRates = () => {
      fetchCurrencyRates().then(({ bpi: { USD, EUR, GBP } }) => setCurrencyRates({
        USD: USD.rate_float,
        EUR: EUR.rate_float,
        GBP: GBP.rate_float,
      }));
    };

    setInterval(() => {
      getCurrencyRates();
    }, 60000);
    getCurrencyRates();
  }, []);

  return currencyRates;
};

export default useCurrencyRates;
