import './CryptoRow.css';


const CryptoRow = (props) => {
    return(
        <div className='cryptoRow'>
            <div className='cell rank'>{props.rank}</div>
            <div className='cell name'>
                <img src={props.image} alt={props.name}/>
                {props.name}
            </div>
            <div className='cell price'>${props.price.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 8})}</div>
            <div className='cell oneHour'>
                {Math.round(props.oneHour * 100) / 100}%
            </div>
            <div className='cell twentyFourHours'>
                {Math.round(props.oneDay * 100) / 100}%
            </div>
            <div className='cell sevenDays'>
                {Math.round(props.sevenDays * 100) / 100}%
            </div>
            <div className='cell volume'>${props.volume.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}</div>
            <div className='cell marketCap'>${props.marketCap.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}</div>
        </div>
    );
}


export default CryptoRow;