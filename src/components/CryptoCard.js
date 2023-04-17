import React from 'react';
import './CryptoCard.css';


const CryptoCard = (props) => {
    return(
        <div className='cryptoCard'>

            <div className='left'>
                <div className='price-card'>
                    <div className='sectionTitle'>Price:</div> ${props.price.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 8})}
                </div>
                <div className='middle'>
                    <div className='oneHour-card'>
                        <div className='sectionTitle'>1hr:</div> {Math.round(props.oneHour * 100) / 100}%
                    </div>
                    <div className='twentyFourHours-card'>
                        <div className='sectionTitle'>24hr:</div> {Math.round(props.oneDay * 100) / 100}%
                    </div>
                    <div className='sevenDays-card'>
                        <div className='sectionTitle'>7d:</div> {Math.round(props.sevenDays * 100) / 100}%
                    </div>
                </div>
                <div className='volume-card'>
                    <div className='sectionTitle'>Volume:</div> ${props.volume.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}
                </div>
                <div className='market-card'>
                    <div className='sectionTitle'>Market Cap:</div> ${props.marketCap.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}
                </div>
            </div>
            <div className='right'>
                <div className='name-card'>
                    {props.name}
                </div>
                <div className='image-card'>
                    <img src={props.image} alt={props.name}/>
                </div>
            </div>
        </div>     
    );
}


export default CryptoCard;