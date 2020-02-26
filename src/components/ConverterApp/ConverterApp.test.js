import React from 'react';
import { render } from '@testing-library/react';
import ConverterApp from './ConverterApp';

test('renders ConverterApp with BTC field', () => {
  const { getByText } = render(<ConverterApp />);
  const btcLabel = getByText('BTC');
  expect(btcLabel).toBeInTheDocument();
});
