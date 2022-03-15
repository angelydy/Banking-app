import React, { useState } from 'react'
import CurrencyOptions from './CurrencyOptions';
import './../css/index.css';
import placeCommas from '../utils/placeCommas';

export default function WithdrawControl(props) {
  const { displayFeature, currentUsers, setCurrentUser } = props;
  const [accNumMatch, setAccNumMatch] = useState(false);
  const [matchedAcc, setAccMatch] = useState('');
  const [withdrawAmount, setWithdrawAmount] = useState()

  function validateAccNum(e) {
    currentUsers.findIndex(acc => {
      if(acc.accNum === e.target.value) {
        setAccNumMatch(true)
        setAccMatch(acc.accNum)
      }
    });
  }

  function storeWithdrawAmount(e) {
    setWithdrawAmount(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault()
    if(accNumMatch) {
      currentUsers.findIndex(acc => {
        if(acc.accNum === matchedAcc) {
          let newBalance = Number(acc.balance.split(',').join(''))
          let withdrawal = Number(withdrawAmount.split(',').join('')) 
          if(newBalance > withdrawal) {
            newBalance -= withdrawal
            acc.balance = newBalance.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")
            alert('Withdraw successful')
            setCurrentUser([...currentUsers])
          } else {
            alert("Not enough mana")
          }
        }
      })
    } else {
      alert('Not valid account')
    }
    e.target.reset()
  }

  return (
    <section className='withdraw-control-wrapper'>
      <form onSubmit={handleSubmit}>
        <div className='withdraw-deposit-title'>
          Withdraw
        </div>
        <div className={displayFeature}>
          <label htmlFor="enter-acc-no">Enter Account No.</label>
          <input required type="text" name='enter-acc-no' onChange={validateAccNum}/>
        </div>
        <div className='withdraw-enter-amount'>
          <label htmlFor="amount">Enter an Amount</label>
          <CurrencyOptions />
          <input required type="text" name='amount' onKeyUp={placeCommas} onChange={storeWithdrawAmount}/>
        </div>
        <div className='withdraw-triggers'>
          <button>Withdraw</button>
          <button type='reset'>Reset</button>
        </div>
      </form>
    </section>
  );
}
