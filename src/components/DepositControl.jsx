import React, { useState } from 'react'
import CurrencyOptions from './CurrencyOptions';
import placeCommas from '../utils/placeCommas';
import { InvalidAccount,TransactionSuccessful } from './AlertModals';
import './../css/index.css';

export default function DepositControl(props) {
  const { displayFeature, currentUsers, setCurrentUser } = props;
  const [accNumMatch, setAccNumMatch] = useState(false);
  const [matchedAcc, setAccMatch] = useState();
  const [depositAmount, setDepositAmount] = useState()
  const [ifUserNotExist, setIfUserNotExist] = useState(false)
  const [transactionSuccessful, setTransactionSuccessful] = useState(false)

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
          setTransactionSuccessful(true)
          setCurrentUser([...currentUsers])
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
    setDepositAmount()
    setAccNumMatch(false)
  }

  return (
    <section className='deposit-control-wrapper' id='deposit-control-wrapper'>
      <div className='withdraw-deposit-title'>
        Deposit
      </div>
    <form onSubmit={handleSubmit}>
      <div className={displayFeature}>
        <label htmlFor="enter-acc-no">Enter Account No.</label>
        <input required type="text" name='enter-acc-no' onChange={validateAccNum}/>
      </div>
      <div className='deposit-enter-amount'>
        <label htmlFor="amount">Enter an Amount</label>
        <CurrencyOptions />
        <input required type="text" name='amount' onKeyUp={placeCommas} onChange={storeDepositAmount}/>
      </div>
      <div className='deposit-triggers'>
        <button>Deposit</button>
        <button type='reset' onClick={resetState}>Reset</button>
      </div>
     </form>
     <InvalidAccount 
        displayState={ifUserNotExist ? "alert-modal-wrapper show" : "alert-modal-wrapper"}
        closeState={()=> ifUserNotExist ? setIfUserNotExist(false) : setIfUserNotExist(true)}
      />
      <TransactionSuccessful
        displayState={transactionSuccessful ? "alert-modal-wrapper show" : "alert-modal-wrapper"}
        closeState={()=> transactionSuccessful ? setTransactionSuccessful(false) : setTransactionSuccessful(true)}
      />
    </section>
  );
}
