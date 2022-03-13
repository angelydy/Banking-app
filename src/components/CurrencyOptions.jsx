import React from 'react'

export const CURRENCY = [
  {name: 'php', symbol: '₱'},
  {name: 'usd', symbol: '$'},
  {name: 'euro', symbol: '€'},
  {name: 'hryvnia', symbol: '₴'},
  {name: 'yuan', symbol: '¥'}
]

export default function CurrencyOptions() {
  return (
    <select name="currency-options" id="currency-options">
        {CURRENCY.map(curr => {
          return (
            <option key={curr.name} value={curr.name}>
            {curr.symbol}
            </option>
          )
        })}
    </select> 
  )
}
