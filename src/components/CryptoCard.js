import React from 'react'
import './CryptoCard.css'

export const CryptoCard = ({ coin }) => {
  return (
    <div className="cryptoCard">
      {coin.name}

    </div>
  )
}
