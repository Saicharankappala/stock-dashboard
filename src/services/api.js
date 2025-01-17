import axios from 'axios';

// API Keys
const NEWS_API_KEY = "1a890964719d486c9daef74ced1e1f19";
const ALPHA_VANTAGE_API_KEY = "ELUZTU2NX6IZ3UPI";
const EXCHANGE_API_KEY = "cf5b280cdc104285432a67cd";

// Fetch Stock Data
export const fetchStockData = async (symbol) => {
  try {
    const response = await axios.get(
      `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${symbol}&apikey=${ALPHA_VANTAGE_API_KEY}`
    );
    return response.data["Time Series (Daily)"];
  } catch (error) {
    console.error("Error fetching stock data:", error);
    throw error;
  }
};

// Fetch Market News
export const fetchMarketNews = async () => {
  try {
    const response = await axios.get(
      `https://newsapi.org/v2/everything?q=stocks&apiKey=${NEWS_API_KEY}`
    );
    return response.data.articles;
  } catch (error) {
    console.error("Error fetching market news:", error);
    throw error;
  }
};

// Fetch Currency Exchange Rates
export const fetchCurrencyRates = async () => {
  try {
    const response = await axios.get(
      `https://v6.exchangerate-api.com/v6/${EXCHANGE_API_KEY}/latest/USD`
    );
    return response.data.conversion_rates;
  } catch (error) {
    console.error("Error fetching currency rates:", error);
    throw error;
  }
};
