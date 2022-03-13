import React from 'react'

const currency= ['php', 'usd', 'euro', 'hryvian', 'yuan']
const currencyObj = [{ value:'php', symb: "₱" }, 
                    { value: 'usd', symb: "$" }, 
                    { value: 'euro', symb: "€" }, 
                    { value: 'hryvian', symb: "₴" }, 
                    { value: 'yuan', symb: "¥" }]
const result = currency.map(value => currencyObj.find(o => o.value === value).symb);

export default function CurrencyOptions() {
  return (
    <select name="currency-options" id="currency-options">
        {currency.map(curr => {
          return (
            <option value={curr}>
              {result[curr]}
            </option>
          )
        })}
      </select> 
  )
}
