
import './App.css';
import { Button, Grid } from '@mui/material';
import { useEffect, useState } from 'react';
import News from './components/news/News';
import { Box } from '@mui/system';

function App() {
  const [newspaper, setNewspaper] = useState([]);
  useEffect(() => {
    fetch("https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=421fdb3673b449fca41d70ef4d37bda3")
      .then(res => res.json())
      .then(data => setNewspaper(data.articles))
  }, [])
  return (

    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 12, sm: 12, md: 12 }}>
        {
          newspaper.map(article => <Grid item xs={12} sm={4} md={3}>
            <News news={article}></News>
          </Grid>)
        }
      </Grid>
    </Box>



    // <div className="App">
    //   <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>

    //     {
    //       newspaper.map(news => {
    //         <Grid item xs={2} sm={4} md={4} >
    //           <News news={news}></News>

    //         </Grid>
    //       })






    //     }

    //   </Grid>
    // </div>
  );
}

export default App;
