import React from 'react';
import './App.css';
import AnimeList from './components/AnimeList';

function App() {
  return (
    <div className="App">
      <div className="title">
      <h1>Anime News</h1>
      </div>
      <AnimeList/>
    </div>
  );
}

export default App;
