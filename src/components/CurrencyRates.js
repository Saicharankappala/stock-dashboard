import React, { useEffect, useState } from 'react';
import { fetchCurrencyRates } from '../services/api';

const CurrencyRates = () => {
  const [rates, setRates] = useState({});

  useEffect(() => {
    const fetchRates = async () => {
      try {
        const data = await fetchCurrencyRates();
        setRates(data);
      } catch (error) {
        console.error("Failed to fetch currency rates:", error);
      }
    };

    fetchRates();
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-lg font-bold">Currency Exchange Rates (USD)</h2>
      <ul>
        {Object.keys(rates).map((currency) => (
          <li key={currency}>
            {currency}: {rates[currency]}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CurrencyRates;
