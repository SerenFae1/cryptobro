import React from 'react';
import { Sparklines, SparklinesLine } from 'react-sparklines';
import './CryptoRow.css';


const CryptoRow = (props) => {
    let USDollar = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        maximumSignificantDigits: 8
    });

    let USDollarBig = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    });

    let Percent = new Intl.NumberFormat('en-US',
    {
        maximumSignificantDigits: 2
    });

    let hcolor;
    let fhcolor;
    let thcolor;

    if(props.oneHour > 0) hcolor = { color: 'green' };
    if(props.oneHour < 0) hcolor = { color: 'red' };

    if(props.sevenDays > 0) fhcolor = { color: 'green' };
    if(props.sevenDays < 0) fhcolor = { color: 'red' };

    if(props.twentyFourHours > 0) thcolor = { color: 'green' };
    if(props.twentyFourHours < 0) thcolor = { color: 'red' };

    return(
        <div className='cryptoRow'>
            <div className='cell name'>
                <img src={props.image} alt={props.name}/>
                {props.name}
            </div>
            <div className='cell price'>{USDollar.format(props.price)}</div>
            <div className='cell oneHour' style={hcolor}>{Percent.format(props.oneHour)}%
            </div>
            <div className='cell twentyFourHours' style={fhcolor}>{Percent.format(props.twentyFourHours)}%</div>
            <div className='cell chart'>
                <Sparklines data={props.chart.price} width={120} height={20}>
                    <SparklinesLine color="blue" />
                </Sparklines>
            </div>
            <div className='cell sevenDays' style={thcolor}>
                {Percent.format(props.sevenDays)}%
            </div>
            <div className='cell volume'>{USDollarBig.format(props.volume)}</div>
            <div className='cell marketCap'>{USDollarBig.format(props.marketCap)}</div>
        </div>
    );
}


export default CryptoRow;