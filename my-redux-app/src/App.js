import React from 'react';
import './App.css';
import AnimeList from './components/AnimeList';

function App() {
  return (
    <div className="App">
      <div className="title">
      <h1>Anime News</h1>
      </div>
      <div className="CardHolder">
      <AnimeList/>
      </div> 
    </div>
  );
}//this closes App function

export default App;
