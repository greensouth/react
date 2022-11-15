import './App.css';
import './components/card.jsx';
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
      <Card name={dataGames[0].name} thumb={dataGames[0].thumb} url={dataGames[0].url}/>
    </div>
  );
}

export default App;
