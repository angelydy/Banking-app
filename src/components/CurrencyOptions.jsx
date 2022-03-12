import React from 'react'

// export const CURRENCY = ['php', 'usd', 'euro', 'hryvnia', 'yuan']

// export default function CurrencyOptions() {
//   return (
//     <select name="currency-options" id="currency-options">
//         {CURRENCY.map(curr => {
//           return (
//             <option value={curr}>
//             {}
//             </option>
//           )
//         })}
//       </select> 
//   )
// }

export default function CurrencyOptions() {
  return (
    <select name="currency-options" id="currency-options">
      <option value="php">₱</option>  
      <option value="usd">$</option>
      <option value="euro">€</option>
      <option value="hryvnia">₴</option>
      <option value="yuan">¥</option>
    </select> 
  )
}
