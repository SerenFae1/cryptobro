import './CardView.css';
import CryptoCard from './CryptoCard';



const CardView = (props) => {
    return(
        <div className='cardContainer'>
          {
            props.coins.map((coin) => {
              return (
                <CryptoCard
                  rank={coin.market_cap_rank}
                  image={coin.image}
                  name={coin.name}
                  price={coin.current_price}
                  oneHour={coin.price_change_percentage_1h_in_currency}
                  oneDay={coin.price_change_percentage_24h_in_currency}
                  sevenDays={coin.price_change_percentage_7d_in_currency}
                  volume={coin.total_volume}
                  marketCap={coin.market_cap}
                />
              )
            })
          }
        </div>
    );
}


export default CardView;