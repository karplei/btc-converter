import React from 'react';
import PropTypes from 'prop-types';
import './CurrencyField.css';

const CurrencyField = ({ currencyName, value }) => {
  const formattedValue = new Intl.NumberFormat(navigator.language, { style: 'currency', currency: currencyName }).format(value);
  return (
    <div className="currency-field">
      <span>{currencyName}</span>
      <span>{formattedValue}</span>
    </div>
  );
};

CurrencyField.propTypes = {
  currencyName: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired
};

export default CurrencyField;
