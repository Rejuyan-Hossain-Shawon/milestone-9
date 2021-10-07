import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import News from './components/News/News';

function App() {
  const [newsPaper, setNewsPaper] = useState([]);
  useEffect(() => {
    fetch("https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=421fdb3673b449fca41d70ef4d37bda3")
      .then(res => res.json())
      .then(data => setNewsPaper(data.articles))
  }, [])
  return (
    <div className="App">
      <h2 className="text-4xl tex font-black text-primary ">This is the newspaper with tailwind</h2>
      <div className="grid grid-cols-3 gap-4  ">
        {
          newsPaper.map(nw => <News key={nw.title} news={nw}></News>)
        }




      </div>
    </div>
  );
}

export default App;
