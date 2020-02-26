import { useState } from 'react';
import useLocalStorage from './useLocalStorage';

const useCurrency = () => {
  const defaultCurrencyList = ['USD', 'EUR', 'GBP'];
  const [availableCurrency, setAvailableCurrency] = useLocalStorage('availableCurrencyList', defaultCurrencyList);
  const [visibleCurrency, setVisibleCurrency] = useState(
    defaultCurrencyList.filter((currency) => (!availableCurrency.includes(currency)))
  );

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
