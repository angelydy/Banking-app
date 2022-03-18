import React from 'react'

export const CURRENCY = [
  {rate: 1, symbol: '₱'},
  {rate: 52, symbol: '$'},
  {rate: 57, symbol: '€'},
  {rate: 2, symbol: '₴'},
  {rate: 8, symbol: '¥'},
  {rate: 69, symbol: '£'},
  {rate: 14, symbol: 'د.إ'},
  {rate: 13, symbol: '﷼'}
]

export default function CurrencyOptions({ convertCurr, onConvertCurr }) {
  function handleChange(e) {
    onConvertCurr(e.target.value)
  }
  
  return (
    <select name="currency-options" id="currency-options" value={convertCurr} onChange={handleChange}>
        {CURRENCY.map(curr=> {
          return (
            <option key={curr.rate} value={curr.rate}>
            {curr.symbol}
            </option>
          )
        })}
    </select> 
  )
}
