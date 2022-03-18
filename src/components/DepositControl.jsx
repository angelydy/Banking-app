import React, { useState } from 'react'
import CurrencyOptions from './CurrencyOptions';
import placeCommas from '../utils/placeCommas';
import { TransactionSuccessful, InvalidAmount } from './AlertModals';
import './../css/index.css';
import { AccountOptions } from './AccountOptions';

export default function DepositControl({ displayFeature, currentUsers, setCurrentUser }) {
  const [matchedAcc, setAccMatch] = useState();
  const [accLabel, setAccLabel] = useState('Please select Account Number');
  const [depositAmount, setDepositAmount] = useState()
  const [transactionSuccessful, setTransactionSuccessful] = useState(false)
  const [invalidAmount, setInvalidAmount] = useState(false)
  const [currency, setCurrency] = useState(1)

  function storeDepositAmount(e) {
    setDepositAmount(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault()
    if(depositAmount < 100) {
      setInvalidAmount(true)
      e.target.reset()
      resetState()
      return
    }
    currentUsers.findIndex(acc => {
      if(acc.accNum === matchedAcc) {
        let newBalance = Number(acc.balance.split(',').join(''))
        let deposit = Number(depositAmount.split(',').join('')) 
        deposit *= currency
        newBalance += deposit
        acc.balance = newBalance.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")
        setTransactionSuccessful(true)
        setCurrentUser([...currentUsers])
      }
    })
    e.target.reset()
    resetState()
  }

  function resetState() {
    setAccMatch()
    setDepositAmount()
    setAccLabel('Please select Account Number')
    setCurrency(1)
  }

  return (
    <section className='deposit-control-wrapper' id='deposit-control-wrapper'>
      <div className='withdraw-deposit-title'>
        Deposit
      </div>
    <form onSubmit={handleSubmit}>
      <div className={displayFeature}>
      <AccountOptions passedUserInfo={currentUsers} onSetAccLabel={setAccLabel} selectedAccLabel={accLabel} onSelectAcc={setAccMatch} selectedAcc={matchedAcc}/>
      </div>
      <div className='deposit-enter-amount'>
        <label htmlFor="amount">Enter an Amount</label>
        <CurrencyOptions convertCurr={currency} onConvertCurr={setCurrency}/>
        <input required type="text" name='amount' onKeyUp={placeCommas} onChange={storeDepositAmount}/>
      </div>
      <div className='deposit-triggers'>
        <button>Deposit</button>
        <button type='reset' onClick={resetState}>Reset</button>
      </div>
     </form>
      <TransactionSuccessful
        displayState={transactionSuccessful ? "alert-modal-wrapper show" : "alert-modal-wrapper"}
        closeState={()=> transactionSuccessful ? setTransactionSuccessful(false) : setTransactionSuccessful(true)}
      />
      <InvalidAmount 
        displayState={invalidAmount ? "alert-modal-wrapper show" : "alert-modal-wrapper"}
        closeState={()=> invalidAmount ? setInvalidAmount(false) : setInvalidAmount(true)}
      />
    </section>
  );
}
