import React, { useState } from 'react';
import CurrencyField from '../shared/CurrencyField/CurrencyField';
import './ConverterForm.css';

const ConverterForm = () => {
  const [btcValue, setBTCValue] = useState(1);
  return (
    <div className="converter-form">
      <label className="btc-label">
        BTC
        <input
          className="btc-input"
          type="number"
          onChange={(event) => setBTCValue(parseFloat(event.target.value))}
          value={btcValue}
          min={0}
        />
      </label>
      <CurrencyField
        currencyName="EUR"
        value={btcValue * 1000}
      />
    </div>
  );
};

export default ConverterForm;
