import React, { useEffect, useState } from 'react';
import { fetchStockData } from '../services/api';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);


const StockChart = ({ symbol }) => {
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchStockData(symbol);
        const dates = Object.keys(data).slice(0, 10).reverse();
        const prices = dates.map((date) => parseFloat(data[date]["4. close"]));

        setChartData({
          labels: dates,
          datasets: [
            {
              label: `${symbol} Closing Prices`,
              data: prices,
              borderColor: 'rgba(75,192,192,1)',
              fill: false,
            },
          ],
        });
      } catch (error) {
        console.error("Failed to fetch stock data:", error);
      }
    };

    fetchData();
  }, [symbol]);

  return chartData ? <Line data={chartData} /> : <p>Loading chart...</p>;
};

export default StockChart;
