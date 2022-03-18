import React, { useState, useEffect } from 'react'
import CurrencyOptions from './CurrencyOptions';
import { NotEnoughBalance, TransactionSuccessful, InvalidAmount } from './AlertModals';
import placeCommas from '../utils/placeCommas';
import './../css/index.css';
import { AccountOptions } from './AccountOptions';

export default function WithdrawControl({ displayFeature, currentUsers, setCurrentUser, passedHistory, setPassedHistory }) {
  const [matchedAcc, setAccMatch] = useState();
  const [accLabel, setAccLabel] = useState('Please select Account Number');
  const [withdrawAmount, setWithdrawAmount] = useState()
  const [notEnoughBalance, setNotEnoughBalance] = useState(false)
  const [transactionSuccessful, setTransactionSuccessful] = useState(false)
  const [invalidAmount, setInvalidAmount] = useState(false)
  const [currency, setCurrency] = useState(1)
  const date = new Date().toLocaleString().split(',')[0]
  const hours = new Date().getHours()
  var mins = new Date().getMinutes()
  mins = mins > 9 ? mins : '0' + mins
  const time = `${date} ${hours}:${mins}`

  function storeWithdrawAmount(e) {
    setWithdrawAmount(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault()
    if(withdrawAmount < 100) {
      setInvalidAmount(true)
      e.target.reset()
      resetState()
      return
    }
    currentUsers.findIndex(acc => {
      if(acc.accNum === matchedAcc) {
        let newBalance = Number(acc.balance.split(',').join(''))
        let withdrawal = Number(withdrawAmount.split(',').join('')) 
        withdrawal *= currency
        if(newBalance > withdrawal) {
          newBalance -= withdrawal
          acc.balance = newBalance.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")
          let newHistory = `${acc.lname} ${acc.fname} withdrew ₱${withdrawal} on ${time}.`
          setPassedHistory([...passedHistory, newHistory])
          setTransactionSuccessful(true)
          setCurrentUser([...currentUsers])
        } else {
          setNotEnoughBalance(true)
        }
      }
    })
    e.target.reset()
    resetState()
  }

  function resetState() {
    setAccMatch()
    setWithdrawAmount()
    setAccLabel('Please select Account Number')
    setCurrency(1)
  }

  return (
    <section className='withdraw-control-wrapper' id='withdraw-control-wrapper'>
      <form onSubmit={handleSubmit}>
        <div className='withdraw-deposit-title'>
          Withdraw
        </div>
        <div className={displayFeature}>
        <AccountOptions passedUserInfo={currentUsers} onSetAccLabel={setAccLabel} selectedAccLabel={accLabel} onSelectAcc={setAccMatch} selectedAcc={matchedAcc}/>
        </div>
        <label htmlFor="amount">Enter an Amount</label>
        <div className='withdraw-enter-amount'>
          <CurrencyOptions convertCurr={currency} onConvertCurr={setCurrency}/> 
          <input required type="text" name='amount' onKeyUp={placeCommas} onChange={storeWithdrawAmount}/>
        </div>
        <div className='withdraw-triggers'>
          <button>Withdraw</button>
          <button type='reset' onClick={resetState}>Reset</button>
        </div>
      </form>
      <NotEnoughBalance
        displayState={notEnoughBalance ? "alert-modal-wrapper show" : "alert-modal-wrapper"}
        closeState={()=> notEnoughBalance ? setNotEnoughBalance(false) : setNotEnoughBalance(true)}
        resetState={resetState}
      />
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
