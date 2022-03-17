import React from 'react'
import { useState } from 'react'

export const CURRENCY = [
  {rate: 1, symbol: '₱'},
  {rate: 52, symbol: '$'},
  {rate: 57, symbol: '€'},
  {rate: 2, symbol: '₴'},
  {rate: 8, symbol: '¥'}
]

export default function CurrencyOptions() {
  return (
    <select name="currency-options" id="currency-options">
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
