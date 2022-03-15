import React, { useState } from 'react'
import './../css/index.css';
import CurrencyOptions from './CurrencyOptions';
import placeCommas from '../utils/placeCommas';
import { InvalidAccount } from './ErrorModals';
export default function DepositControl(props) {
  const { displayFeature, currentUsers, setCurrentUser } = props;
  const [accNumMatch, setAccNumMatch] = useState(false);
  const [matchedAcc, setAccMatch] = useState('');
  const [depositAmount, setDepositAmount] = useState()

  function validateAccNum(e) {
    currentUsers.findIndex(acc => {
      if(acc.accNum === e.target.value) {
        setAccNumMatch(true)
        setAccMatch(acc.accNum)
      }
    });
  }

  function storeDepositAmount(e) {
    setDepositAmount(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault()
    if(accNumMatch) {
      currentUsers.findIndex(acc => {
        if(acc.accNum === matchedAcc) {
          let newBalance = Number(acc.balance.split(',').join(''))
          let deposit = Number(depositAmount.split(',').join('')) 
          newBalance += deposit
          acc.balance = newBalance.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")
          setCurrentUser([...currentUsers])
        }
      })
    } else {
      <InvalidAccount />
    }
  }

  return (
    <section className='deposit-control-wrapper' id='deposit-control-wrapper'>
      <div className='withdraw-deposit-title'>
        Deposit
      </div>
    <form onSubmit={handleSubmit}>
      <div className={displayFeature}>
        <label htmlFor="enter-acc-no">Enter Account No.</label>
        <input type="text" name='enter-acc-no' onChange={validateAccNum}/>
      </div>
      <div className='deposit-enter-amount'>
        <label htmlFor="amount">Enter an Amount</label>
        <CurrencyOptions />
        <input type="text" name='amount' onKeyUp={placeCommas} onChange={storeDepositAmount}/>
      </div>
      <div className='deposit-triggers'>
        <button>Deposit</button>
        <button>Reset</button>
      </div>
     </form>
    </section>
  );
}
