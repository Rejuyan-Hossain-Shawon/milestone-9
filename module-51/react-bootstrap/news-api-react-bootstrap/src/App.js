import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import { useEffect, useState } from 'react';
import { Row, Spinner } from 'react-bootstrap';
import News from './components/News/News';

function App() {
  const [news, setNews] = useState([]);
  useEffect(() => {
    fetch("https://newsapi.org/v2/everything?q=apple&from=2021-09-30&to=2021-09-30&sortBy=popularity&apiKey=421fdb3673b449fca41d70ef4d37bda3")
      .then(res => res.json())
      .then(data => setNews(data.articles))
  }, [])

  return (
    <div className="App">
      {
        news.length === 0 ? <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner> : <Row xs={1} md={4} className="g-4">

          {
            news.map(nw => <News key={nw.title} news={nw}></News>)
          }

        </Row>
      }


    </div>
  );
}

export default App;
