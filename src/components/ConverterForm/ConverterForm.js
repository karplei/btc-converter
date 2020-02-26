import React, { useState } from 'react';
import CurrencyField from '../shared/CurrencyField/CurrencyField';
import { useCurrency, useCurrencyRates } from '../../utils/CustomHooks';
import './ConverterForm.css';

const ConverterForm = () => {
  const [btcValue, setBTCValue] = useState(1);
  const currencyRates = useCurrencyRates();
  const [availableCurrency, visibleCurrency, onCurrencySelect, onCurrencyRemove] = useCurrency();
  return (
    <div className="converter-form">
      <label className="converter-label">
        BTC
        <input
          className="converter-input"
          type="number"
          onChange={(event) => setBTCValue(parseFloat(event.target.value))}
          value={btcValue}
          min={0}
        />
      </label>
      {availableCurrency.length > 0 && (
        <label className="converter-label">
          Add Currency
          <select
            className="converter-input"
            onChange={onCurrencySelect}
            onBlur={onCurrencySelect}
            value=""
          >
            <option hidden value="" />
            {availableCurrency.map((currency) => (
              <option
                key={currency}
                value={currency}
              >
                {currency}
              </option>
            ))}
          </select>
        </label>
      )}
      {visibleCurrency.map((currency) => (
        <CurrencyField
          key={currency}
          currencyRates={currencyRates}
          currencyName={currency}
          btcValue={btcValue}
          onCurrencyRemove={onCurrencyRemove}
        />
      ))}
    </div>
  );
};

export default ConverterForm;
