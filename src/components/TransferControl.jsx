import React, { useState } from 'react'
import './../css/index.css';
import CurrencyOptions from './CurrencyOptions';
import placeCommas from '../utils/placeCommas';
import { NotEnoughBalance, InvalidAccount, TransactionSuccessful } from './AlertModals';

export default function TransferControl(props) {
  const { displayFeature, currentUsers, setCurrentUser } = props;
  const [accNumMatchFrom, setAccNumMatchFrom] = useState(false);
  const [matchedAccFrom, setAccMatchFrom] = useState('');
  const [accNumMatchTo, setAccNumMatchTo] = useState(false);
  const [matchedAccTo, setAccMatchTo] = useState('');
  const [transferAmount, setTransferAmount] = useState()
  const [notEnoughBalance, setNotEnoughBalance] = useState(false)
  const [ifUserNotExist, setIfUserNotExist] = useState(false)
  const [transactionSuccessful, setTransactionSuccessful] = useState(false)
 
  function validateAccNumFrom(e) {
    currentUsers.find(acc => {
      if(acc.accNum == e.target.value) {
        setAccNumMatchFrom(true)
        setAccMatchFrom(acc.accNum)
      }
    });
  }

  function validateAccNumTo(e) {
    currentUsers.find(acc => {
      if(acc.accNum == e.target.value) {
        setAccNumMatchTo(true)
        setAccMatchTo(acc.accNum)
        console.log('hey')
      }
    });
  }

  function storeTransferAmount(e) {
    setTransferAmount(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault()
    if((matchedAccFrom !== matchedAccTo) && accNumMatchFrom && accNumMatchTo) {
      currentUsers.findIndex(acc => {
        if(acc.accNum === matchedAccFrom) {
          let newBalance = Number(acc.balance.split(',').join(''))
          let transfer = Number(transferAmount.split(',').join('')) 
          if(newBalance > transfer) {
            newBalance -= transfer
            acc.balance = newBalance.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")
            setTransactionSuccessful(true)
          } else {
            setNotEnoughBalance(true)
          }
        }
        if(acc.accNum === matchedAccTo) {
          let newBalance = Number(acc.balance.split(',').join(''))
          let transfer = Number(transferAmount.split(',').join('')) 
          newBalance += transfer
          acc.balance = newBalance.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")
        }
        setCurrentUser([...currentUsers])
      })
    } else {
      setIfUserNotExist(true)
    }
    e.target.reset()
    resetState()
  }

  function resetState() {
    setAccMatchFrom('')
    setAccMatchTo('')
    setTransferAmount()
    setAccNumMatchFrom(false)
    setAccNumMatchTo(false)
    console.log( 
      accNumMatchFrom,
      matchedAccFrom,
      accNumMatchTo,
      matchedAccTo,
      transferAmount)
  }
  
  return (
    <section className='transfer-control-wrapper' id='transfer-control-wrapper'>
      <div className='withdraw-deposit-title'>
        Transfer
      </div>
      <form onSubmit={handleSubmit}>
        <div className='transfer-control-container'>
        <div className={displayFeature} id="sender-acc-no">
          <label htmlFor="acc-no-of-sender">Enter Account No. of Sender</label>
          <input required type="text" name='acc-no-of-sender' onChange={validateAccNumFrom}/>
        </div>
        <div className='receiver-acc-no'>
          <label htmlFor="receiver-acc-no">Enter Account No. of Receiver</label>
          <input required type="text" name='receiver-acc-no' onChange={validateAccNumTo}/>
        </div>
        <div className='transfer-enter-amount'>
          <label htmlFor="amount">Enter an Amount</label>
          <CurrencyOptions />
         <div>
          <input required type="text" name='amount' onKeyUp={placeCommas} onChange={storeTransferAmount}/>
        </div>
      </div>
      </div>
        <div className='transfer-triggers'>
          <button>Transfer</button>
          <button type='reset' onClick={resetState}>Reset</button>
        </div>
      </form>
      <InvalidAccount 
        displayState={ifUserNotExist ? "alert-modal-wrapper show" : "alert-modal-wrapper"}
        closeState={()=> ifUserNotExist ? setIfUserNotExist(false) : setIfUserNotExist(true)}
        resetState={resetState}
      />
      <NotEnoughBalance
        displayState={notEnoughBalance ? "alert-modal-wrapper show" : "alert-modal-wrapper"}
        closeState={()=> notEnoughBalance ? setNotEnoughBalance(false) : setNotEnoughBalance(true)}
      />
      <TransactionSuccessful
        displayState={transactionSuccessful ? "alert-modal-wrapper show" : "alert-modal-wrapper"}
        closeState={()=> transactionSuccessful ? setTransactionSuccessful(false) : setTransactionSuccessful(true)}
        resetState={resetState}
      />
    </section>
  )
}
