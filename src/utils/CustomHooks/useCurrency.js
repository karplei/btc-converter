import { useState } from 'react';

const useCurrency = () => {
  const [availableCurrency, setAvailableCurrency] = useState(['USD', 'EUR', 'GBP']);
  const [visibleCurrency, setVisibleCurrency] = useState([]);

  const onCurrencySelect = (event) => {
    event.persist();
    const selectedCurrency = event.target.value;
    setAvailableCurrency(availableCurrency.filter((currency) => currency !== selectedCurrency));
    setVisibleCurrency([...visibleCurrency, selectedCurrency]);
  };

  return [
    availableCurrency,
    visibleCurrency,
    onCurrencySelect
  ];
};

export default useCurrency;
