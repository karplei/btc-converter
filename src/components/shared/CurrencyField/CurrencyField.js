import React from 'react';
import PropTypes from 'prop-types';
import './CurrencyField.css';

const CurrencyField = ({ onCurrencyRemove, currencyName, value }) => {
  const formattedValue = new Intl.NumberFormat(navigator.language, { style: 'currency', currency: currencyName }).format(value);
  return (
    <div className="currency-field">
      <span>{currencyName}</span>
      <span>{formattedValue}</span>
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
  onCurrencyRemove: PropTypes.func.isRequired,
  currencyName: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
};

export default CurrencyField;
