import React, { useState } from 'react'
import CurrencyOptions from './CurrencyOptions';
import { NotEnoughBalance, InvalidAccount } from './ErrorModals';
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
            setCurrentUser([...currentUsers])
          } else {
            <NotEnoughBalance />
          }
        }
      })
    } else {
      <InvalidAccount />
    }
  }

  return (
    <section className='withdraw-control-wrapper' id='withdraw-control-wrapper'>
      <form onSubmit={handleSubmit}>
        <div className='withdraw-deposit-title'>
          Withdraw
        </div>
        <div className={displayFeature}>
          <label htmlFor="enter-acc-no">Enter Account No.</label>
          <input type="text" name='enter-acc-no' onChange={validateAccNum}/>
        </div>
        <div className='withdraw-enter-amount'>
          <label htmlFor="amount">Enter an Amount</label>
          <CurrencyOptions />
          <input type="text" name='amount' onKeyUp={placeCommas} onChange={storeWithdrawAmount}/>
        </div>
        <div className='withdraw-triggers'>
          <button>Withdraw</button>
          <button>Reset</button>
        </div>
      </form>
    </section>
  );
}
