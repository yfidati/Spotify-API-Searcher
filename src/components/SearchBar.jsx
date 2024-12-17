import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) onSearch(query);
  };

  return (
    <form onSubmit={handleSubmit} className="flex justify-center mt-16">
      <input
        type="text"
        placeholder="Search for a song, artist, or album..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-1/2 p-3 text-gray-800 rounded-l-md focus:outline-none"
      />
      <button
        type="submit"
        className="bg-green-500 hover:bg-green-600 text-white px-5 rounded-r-md"
      >
        Search
      </button>
    </form>
  );
};

export default SearchBar;
