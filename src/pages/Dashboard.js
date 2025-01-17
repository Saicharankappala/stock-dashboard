import React, { useState } from 'react';
import SearchBar from '../components/SearchBar';
import NewsFeed from '../components/NewsFeed';
import StockChart from '../components/StockChart';
import CurrencyRates from '../components/CurrencyRates';


const Dashboard = () => {
  const [selectedStock, setSelectedStock] = useState(null);

  const handleSearch = (symbol) => {
    setSelectedStock(symbol);
  };

  return (
    <div>
      <h1 className="text-center text-2xl font-bold">Stock/Finance Dashboard</h1>
      <SearchBar onSearch={handleSearch} />
      {selectedStock && <StockChart symbol={selectedStock} />}
      <NewsFeed />
      <CurrencyRates />
    </div>
  );
};

export default Dashboard;
