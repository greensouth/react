import './App.css';
import React from 'react';
import {Card} from './components/card.jsx';



function App() {

  const dataGames = [
    {
      name:   "Sweet Bonanza",
      url:    "https://www.lottofy.com/slots/sweet-bonanza/",
      thumb:  "//cdn.inicium.com/images/lottofy/games/medium/166.jpg"
    }
  ]
  return (
    <div className="App">
      <h1>holi!</h1>
      <ul>
      <Card card={dataGames[0]}/>
      </ul>
    </div>
  );
}

export default App;
