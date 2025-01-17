import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
    const [query, setQuery] = useState('');

    const handleSearch = () => {
        if (query) onSearch(query);
    };

    return (
        <div className="p-4">
            <input
                type="text"
                placeholder="Search Stock Symbol"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="border rounded p-2"
            />
            <button onClick={handleSearch} className="ml-2 bg-blue-500 text-white p-2 rounded">
                Search
            </button>
        </div>
    );
};

export default SearchBar;
