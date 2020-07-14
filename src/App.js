import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './components/ui/Header';
import CharacterGrid from './components/characters/CharacterGrid';

import './App.scss';


const App = () => {
  
  const [ items, setItems] = useState([]);
  const [ isLoading, setIsLoading ] = useState(true);
  
  useEffect(() => {
    const fetchItems = async () => {
      const resultItems = await axios(`https://www.breakingbadapi.com/api/characters`);
      console.log(resultItems.data);
      setItems(resultItems.data);
      setIsLoading(false);
    }
    fetchItems();

  }, []);

  return (
    <div className="container">
      <Header />
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
