import React, { useState } from 'react'
import CurrencyOptions from './CurrencyOptions';
import { NotEnoughBalance, InvalidAccount, TransactionSuccessful } from './AlertModals';
import placeCommas from '../utils/placeCommas';
import './../css/index.css';

export default function WithdrawControl(props) {
  const { displayFeature, currentUsers, setCurrentUser } = props;
  const [accNumMatch, setAccNumMatch] = useState(false);
  const [matchedAcc, setAccMatch] = useState();
  const [withdrawAmount, setWithdrawAmount] = useState()
  const [ifUserNotExist, setIfUserNotExist] = useState(false)
  const [notEnoughBalance, setNotEnoughBalance] = useState(false)
  const [transactionSuccessful, setTransactionSuccessful] = useState(false)

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
            setTransactionSuccessful(true)
            setCurrentUser([...currentUsers])
          } else {
            setNotEnoughBalance(true)
          }
        }
      })
    } else {
      setIfUserNotExist(true)
    }
    e.target.reset()
    resetState()
  }

  function resetState() {
    setAccMatch()
    setWithdrawAmount()
    setAccNumMatch(false)
  }

  return (
    <section className='withdraw-control-wrapper' id='withdraw-control-wrapper'>
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
          <button type='reset' onClick={resetState}>Reset</button>
        </div>
      </form>
      <InvalidAccount 
        displayState={ifUserNotExist ? "alert-modal-wrapper show" : "alert-modal-wrapper"}
        closeState={()=> ifUserNotExist ? setIfUserNotExist(false) : setIfUserNotExist(true)}
      />
      <NotEnoughBalance
        displayState={notEnoughBalance ? "alert-modal-wrapper show" : "alert-modal-wrapper"}
        closeState={()=> notEnoughBalance ? setNotEnoughBalance(false) : setNotEnoughBalance(true)}
      />
       <TransactionSuccessful
        displayState={transactionSuccessful ? "alert-modal-wrapper show" : "alert-modal-wrapper"}
        closeState={()=> transactionSuccessful ? setTransactionSuccessful(false) : setTransactionSuccessful(true)}
      />
    </section>
  );
}
