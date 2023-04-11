import { useEffect, useState } from 'react';
import axios from 'axios';

import './App.css';
import { CryptoRow } from './components/CryptoRow';
import { CryptoCard } from './components/CryptoCard';
import { RowView } from './components/RowView';
import { CardView } from './components/CardView';
import { Swiper, SwiperSlide } from 'swiper/react';
// import data from './data';


function App() {

  const [ coinData, setCoinData ] = useState(null);
  const [ compact, setCompact ] = useState(false);

  useEffect( () => {

    axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=true&price_change_percentage=1h%2C24h%2C7d')
    .then(function (response) {
      console.log(response);
      setCoinData(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });

  }, [] );


  useEffect( () => {
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

  if(coinData === null) {
    return(
      <div>
        <h1>Loading...</h1>
      </div>
    );
  }

  return (
    <div className="App">
      <h2>Top {coinData.length} Coins</h2>

      { compact ? ( <CardView coins={coinData} /> ) : ( <RowView coins={coinData} /> ) }
      

    </div>
  );
}

export default App;
