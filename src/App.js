import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import { Card, Col, Row, Spinner } from 'react-bootstrap';
import News from './components/News/News';
import Header from './components/Header/Header';


function App() {
  const [news, setNews] = useState([]);

  useEffect( () => {
    fetch('https://newsapi.org/v2/everything?q=tesla&from=2021-09-01&sortBy=publishedAt&apiKey=9788ce1d52d244d0819340508070f54f')
    .then(res => res.json())
    .then(data => setNews(data.articles))
  },[])
console.log(news);

  return (
    <div className="App">
      <Header></Header>
      {
        news.length === 0 ? <Spinner animation="grow" />
        : 
        <Row xs={1} md={2} className="g-4 container mx-auto">
        {
          news.map(nw => <News
          key = {nw.url}
          news = {nw}
          >
            
            </News>
            )
        }
  
    </Row>
      }
      
      
        
    </div>
  );
}

export default App;
