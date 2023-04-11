import './TitleRow.css';


const TitleRow = (props) => {
    return(
        <div className='titleRow'>
            <div className='titleCell titleRank'>Rank</div>
            <div className='titleCell titleName'>Name</div>
            <div className='titleCell titlePrice'>Price</div>
            <div className='titleCell titleOneHour'>1hr</div>
            <div className='titleCell title24Hours'>24hr</div>
            <div className='titleCell titleSevenDays'>7d</div>
            <div className='titleCell titleVolume'>Volume</div>
            <div className='titleCell titleMarketCap'>Market Cap</div>
        </div>
    );
}


export default TitleRow;