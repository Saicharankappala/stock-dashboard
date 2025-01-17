import React, { useEffect, useState } from 'react';
import { fetchMarketNews } from '../services/api';

const NewsFeed = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const articles = await fetchMarketNews();
        setNews(articles);
      } catch (error) {
        console.error("Failed to fetch news:", error);
      }
    };

    fetchNews();
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-lg font-bold">Market News</h2>
      <ul>
        {news.map((article, index) => (
          <li key={index} className="mb-4">
            <a href={article.url} target="_blank" rel="noopener noreferrer">
              {article.title}
            </a>
            <p>{article.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NewsFeed;
