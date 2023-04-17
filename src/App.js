import {useState, useEffect} from 'react';
import axios from 'axios';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';

import './App.css';
import CryptoRow from './components/CryptoRow';
import CryptoCard from './components/CryptoCard';
import RowView from './components/RowView';
import CardView from './components/CardView';


function App() {
  const [data, setData] = useState(null);
  const [compact, setCompact] = useState(null);

  useEffect( () => {
    axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=true&price_change_percentage=1h%2C24h%2C7d')
    .then(function (response) {
      console.log(response);
      setData(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });
  }, [] );
  
  useEffect(() => {
    function handleResize() {
      let width = window.innerWidth;

      if(width < 850) {
        setCompact(true);
      } else {
        setCompact(false);
      }
    }

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, [] );

  if(data === null)
  {
    return(
      <div>
        <h1>Loading...</h1>
      </div>
    );
  }

  return (
    <div className='App'>
      { <div className='swiper-container'>
        
      </div> }
      <h2 className='big-heading'>Top {data.length} Coins</h2>
      { compact ? (<CardView coins={data}/>) : (<div className='rowContainer'><RowView coins={data}/></div>) }
    </div>
  );
}

export default App;
