import { useState, useCallback } from 'react';
import { useCharacters } from './hooks/useCharacters';
import Header from './components/ui/Header';
import CharacterGrid from './components/characters/CharacterGrid';
import Search from './components/ui/Search';
import './App.scss';

const App = () => {
  const [query, setQuery] = useState('');
  const { items, isLoading, error } = useCharacters(query);

  const handleQuery = useCallback((q) => setQuery(q), []);

  return (
    <div className="container">
      <Header />
      <Search getQuery={handleQuery} />
      {error && <p className="error">Error: {error}</p>}
      <CharacterGrid isLoading={isLoading} items={items} />
    </div>
  );
};

export default App;
