# Stock/Finance Dashboard

A modern and user-friendly dashboard for tracking stock performance, financial news, and currency exchange rates.

## Features

- **Search for Stock Tickers**: Look up detailed stock information and view historical performance charts.
- **Live News Feed**: Stay updated with the latest financial news.
- **Currency Exchange Rates**: Check real-time exchange rates for multiple currencies.
- **Dark Mode**: Toggle between light and dark themes for better usability.

## Tech Stack

- **Frontend**: React, Chart.js, Tailwind CSS
- **APIs**:
  - [Alpha Vantage](https://www.alphavantage.co/) for stock data
  - [NewsAPI](https://newsapi.org/) for financial news
  - [ExchangeRate-API](https://www.exchangerate-api.com/) for currency rates
- **Hosting**: [Vercel](https://vercel.com/)

## Setup Instructions

To run this project locally:

1. Clone the repository:
   ```bash
   git clone https://github.com/<your-username>/stock-dashboard.git
   cd stock-dashboard
2. Install dependencies
    npm install
3. Create a .env file for your API keys:
    REACT_APP_ALPHA_VANTAGE_API_KEY=your_alpha_vantage_api_key
    REACT_APP_NEWS_API_KEY=your_news_api_key
    REACT_APP_EXCHANGE_API_KEY=your_exchange_api_key
4. Start the development server:
    npm start
5. Visit the app at http://localhost:3000.

Deployment
This app is deployed on Vercel. You can access the live version here:https://stock-dashboard-black.vercel.app/

Contributing
Contributions are welcome! To contribute:

1. Fork the repository.
2. Create a new branch:
    git checkout -b feature-branch
3. Commit your changes:
    git commit -m "Add new feature"
4. Push to your fork:
    git push origin feature-branch
5. Open a pull request.