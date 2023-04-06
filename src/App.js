import logo from './logo.svg';
import './App.css';
import AppHeader from './components/AppHeader';
import FruitItem from './components/FruitItem';
import FruitPost from './components/FruitPost';
import PageHome from './components/PageHome';
import PageErr from './components/PageErr';
import fruits from './data/fruits';
import { useState } from 'react';
import AppSearch from './components/AppSearch';
import { Routes, Route } from 'react-router-dom';


function App() {
  const [selectedFruit, setSelectedFruit] = useState(null);
  const [searchText, setSearchText] = useState('');

  function onFruitOpenClick(theFruit) {
    setSelectedFruit(theFruit);
  }
  
  function onFruitCloseClick() {
    setSelectedFruit(null);
  }

  const filteredFruits = fruits.filter((fruit) => {
    return fruit.title.includes(searchText);
  });

  const fruitElements = filteredFruits.map((fruit, index) => {
    return <FruitItem key={index} fruit={fruit} onFruitClick={onFruitOpenClick}/>;
  });

  let fruitPost = null;
  if(!!selectedFruit) {
    fruitPost = <FruitPost fruit={selectedFruit} onBgClick={onFruitCloseClick}/>
  }

  return (
    <div className="app">
        <AppHeader/>
        <Routes>
          <Route path="/" element={<PageHome/>}/>

          <Route path="fruits" element={
            <section className="app-section">
              <div className="app-container">
                <AppSearch value={searchText} onValueChange={setSearchText}/>
                <div className="app-grid">
                  {fruitElements}
                </div>
              </div>
              {fruitPost}
            </section>
            // {fruitPost}
          }/>
          
          <Route path="*" element={<PageErr/>} />
        </Routes>
    </div>
  );
}

export default App;
