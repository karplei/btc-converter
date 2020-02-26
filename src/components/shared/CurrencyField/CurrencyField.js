import React from 'react';
import PropTypes from 'prop-types';
import './CurrencyField.css';

const CurrencyField = ({
  currencyRates,
  currencyName,
  btcValue,
  onCurrencyRemove
}) => {
  const currencyValue = currencyRates[currencyName] * btcValue;
  const formattedValue = new Intl.NumberFormat(navigator.language, { style: 'currency', currency: currencyName }).format(currencyValue);
  return (
    <div className="currency-row">
      <span>{currencyName}</span>
      <span className="currency-value">{formattedValue}</span>
      <button
        type="button"
        className="remove-button"
        onClick={() => onCurrencyRemove(currencyName)}
      >
        X
      </button>
    </div>
  );
};

CurrencyField.propTypes = {
  currencyRates: PropTypes.object.isRequired,
  currencyName: PropTypes.string.isRequired,
  btcValue: PropTypes.number.isRequired,
  onCurrencyRemove: PropTypes.func.isRequired
};

export default CurrencyField;
