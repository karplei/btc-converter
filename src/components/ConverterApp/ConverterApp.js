import React from 'react';
import CurrencyField from '../shared/CurrencyField/CurrencyField';
import './ConverterApp.css';

const ConverterApp = () => (
  <div className="converter-app-container">
    <div className="converter-form">
      <CurrencyField
        currencyName="EUR"
        value={1500}
      />
    </div>
  </div>
);

export default ConverterApp;
