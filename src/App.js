import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './components/ui/Header';
import CharacterGrid from './components/characters/CharacterGrid';
import Search from './components/ui/Search';

import './App.scss';


const App = () => {
  
  const [ items, setItems] = useState([]);
  const [ isLoading, setIsLoading ] = useState(true);
  const [ query, setQuery ] = useState('');
  
  useEffect(() => {
    const fetchItems = async () => {
      const resultItems = await axios(`https://www.breakingbadapi.com/api/characters?name=${query}`);
      console.log(resultItems.data);
      setItems(resultItems.data);
      setIsLoading(false);
    }
    fetchItems();

  }, [query])

  return (
    <div className="container">
      <Header />
      <Search getQuery={(q) => setQuery(q)} />
      <CharacterGrid isLoading={isLoading} items={items} />
    </div>
  )
}
/* function App() {
  return (
    <div className="container">
      <h1>Hola mundo React JS</h1>
    </div>
  );
} */

export default App;
