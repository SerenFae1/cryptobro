import './CryptoCard.css';


const CryptoCard = (props) => {
    return(
        <div className='cryptoCard'>
            <div className='left'>
                <div className='cardRank'>
                    {props.rank}
                </div>
                <div className='cardIcon'>
                    <img src={props.image} alt={props.name}/>
                </div>
                <div className='cardPrice'>
                    ${props.price.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 8})}
                </div>
            </div>

            <div className='right'>
                <div className='cardName'>
                    {props.name}
                </div>
                <div className='rightMiddle'>
                    <div className='rightSection cardOneHour'>
                        <div className='changeLabel'>1hr</div> <div className='change'>{Math.round(props.oneHour * 100) / 100}%</div>
                    </div>
                    <div className='rightSection card24Hours'>
                        <div className='changeLabel'>24hr</div> <div className='change'>{Math.round(props.oneDay * 100) / 100}%</div>
                    </div>
                    <div className='rightSection cardSevenDays'>
                        <div className='changeLabel'>7d</div> <div className='change'>{Math.round(props.sevenDays * 100) / 100}%</div>
                    </div>
                </div>
                <div className='rightBottom'>
                    <div className='rightBottomSection'>
                        <div className='bottomLabel'>Volume:</div> <div className='bottomValue'>${props.volume.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}</div>
                    </div>
                    <div className='rightBottomSection'>
                        <div className='bottomLabel'>Market Cap:</div> <div className='bottomValue'>${props.marketCap.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}</div>
                    </div>
                </div>
            </div>
        </div>
            
    );
}


export default CryptoCard;