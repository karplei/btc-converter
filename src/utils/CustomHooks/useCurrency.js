import { useState } from 'react';

const useCurrency = () => {
  const [availableCurrency, setAvailableCurrency] = useState(['USD', 'EUR', 'GBP']);
  const [visibleCurrency, setVisibleCurrency] = useState([]);

  const addCurrency = (currencyArray, newCurrency) => ([...currencyArray, newCurrency]);
  const removeCurrency = (currencyArray, currencyToRemove) => (
    currencyArray.filter((currency) => currency !== currencyToRemove)
  );

  const onCurrencySelect = (event) => {
    event.persist();
    const selectedCurrency = event.target.value;
    if (selectedCurrency !== '') {
      setAvailableCurrency(removeCurrency(availableCurrency, selectedCurrency));
      setVisibleCurrency(addCurrency(visibleCurrency, selectedCurrency));
    }
  };

  const onCurrencyRemove = (currency) => {
    setAvailableCurrency(addCurrency(availableCurrency, currency));
    setVisibleCurrency(removeCurrency(visibleCurrency, currency));
  };

  return [
    availableCurrency,
    visibleCurrency,
    onCurrencySelect,
    onCurrencyRemove
  ];
};

export default useCurrency;
