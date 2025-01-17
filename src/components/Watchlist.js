import React from 'react';

const Watchlist = ({ stocks, onRemove }) => {
    return (
        <div className="p-4">
            <h2 className="text-lg font-bold">Watchlist</h2>
            <ul>
                {stocks.map((stock, index) => (
                    <li key={index} className="flex justify-between">
                        <span>{stock}</span>
                        <button onClick={() => onRemove(stock)} className="text-red-500">Remove</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Watchlist;
