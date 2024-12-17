import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import Results from './components/Results';
import { searchSpotify } from './utils/spotify';

const App = () => {
  const [results, setResults] = useState(null);

  const handleSearch = async (query) => {
    const data = await searchSpotify(query);
    setResults(data);
  };

  return (
    <div className="bg-black text-white min-h-screen">
      <h1 className="text-4xl font-bold text-center pt-10">Spotify API Searcher</h1>
      <SearchBar onSearch={handleSearch} />
      {!results ? (
        <p className="text-center text-gray-500 mt-16">
          Please search for an artist to see results.
        </p>
      ) : (
        <Results results={results} />
      )}
    </div>
  );
};

export default App;
