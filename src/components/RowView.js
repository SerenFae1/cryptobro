import './RowView.css';
import TitleRow from './TitleRow';
import CryptoRow from './CryptoRow';



const RowView = (props) => {
    return(
        <>
            <TitleRow/>
            {
            props.coins.map((coin) => {
                return (
                <CryptoRow
                    rank={coin.market_cap_rank}
                    image={coin.image}
                    name={coin.name}
                    price={coin.current_price}
                    oneHour={coin.price_change_percentage_1h_in_currency}
                    twentyFourHours={coin.price_change_percentage_24h_in_currency}
                    chart={coin.sparkline_in_7d}
                    sevenDays={coin.price_change_percentage_7d_in_currency}
                    volume={coin.total_volume}
                    marketCap={coin.market_cap}
                />
                )
            })
            }
        </>
    );
}


export default RowView;