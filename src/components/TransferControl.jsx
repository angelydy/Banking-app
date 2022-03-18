import React, { useState, useEffect } from 'react'
import './../css/index.css';
import CurrencyOptions from './CurrencyOptions';
import placeCommas from '../utils/placeCommas';
import { NotEnoughBalance, TransactionSuccessful, InvalidAmount, SameAccountError } from './AlertModals';
import { AccountOptionsTransferFrom, AccountOptionsTransferTo } from './AccountOptions';

export default function TransferControl({ displayFeature, currentUsers, setCurrentUser }) {
  const [matchedAccFrom, setAccMatchFrom] = useState();
  const [accLabelFrom, setAccLabelFrom] = useState('Please select Sender Account Number');
  const [matchedAccTo, setAccMatchTo] = useState();
  const [accLabelTo, setAccLabelTo] = useState('Please select Receiver Account Number');
  const [transferAmount, setTransferAmount] = useState()
  const [notEnoughBalance, setNotEnoughBalance] = useState(false)
  const [transactionSuccessful, setTransactionSuccessful] = useState(false)
  const [approveTransfer, setApproveTransfer] = useState(true)
  const [invalidAmount, setInvalidAmount] = useState(false)
  const [sameAccError, setSameAccError] = useState(false)

  useEffect(() => {
    currentUsers.findIndex(acc => {
      if(acc.accNum === matchedAccFrom) {
        let newBalance = Number(acc.balance.split(',').join(''))
        let transfer = Number(transferAmount.split(',').join(''))
        if(newBalance < transfer) {
          setApproveTransfer(false)
        }
      }
    })
  }, [transferAmount])
  
  function storeTransferAmount(e) {
    setTransferAmount(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault()
    if(transferAmount < 100) {
      setInvalidAmount(true)
      e.target.reset()
      resetState()
      return
    }
    if(matchedAccFrom !== matchedAccTo) {
      currentUsers.findIndex(acc => {
        if(acc.accNum === matchedAccFrom) {
          let newBalance = Number(acc.balance.split(',').join(''))
          let transfer = Number(transferAmount.split(',').join('')) 
          if(approveTransfer == true) {
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
          if(approveTransfer == true) {
            newBalance += transfer
            acc.balance = newBalance.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")
            setCurrentUser([...currentUsers])
          }
        }
      })
    } else {
      setSameAccError(true)
    }
    e.target.reset()
    resetState()
  }

  function resetState() {
    setApproveTransfer(true)
    setAccMatchFrom()
    setAccMatchTo()
    setTransferAmount()
    setAccLabelFrom('Please select Sender Account Number')
    setAccLabelTo('Please select Receiver Account Number')
  }
  
  return (
    <section className='transfer-control-wrapper' id='transfer-control-wrapper'>
      <div className='withdraw-deposit-title'>
        Transfer
      </div>
      <form onSubmit={handleSubmit}>
        <div className='transfer-control-container'>
        <div className={displayFeature}>
          <AccountOptionsTransferFrom passedUserInfo={currentUsers} onSetAccLabel={setAccLabelFrom} selectedAccLabel={accLabelFrom} onSelectAcc={setAccMatchFrom} selectedAcc={matchedAccFrom} />
        </div>
        <div className={displayFeature}>
          <AccountOptionsTransferTo passedUserInfo={currentUsers} onSetAccLabel={setAccLabelTo} selectedAccLabel={accLabelTo} onSelectAcc={setAccMatchTo} selectedAcc={matchedAccTo} />
        </div>
        <div className='transfer-enter-amount'>
          <label htmlFor="amount">Enter an Amount</label>
          <div>
            <CurrencyOptions /> 
          </div>
        </div>
        <input required type="text" name='amount' onKeyUp={placeCommas} onChange={storeTransferAmount}/>
      </div>
        <div className='transfer-triggers'>
          <button>Transfer</button>
          <button type='reset' onClick={resetState}>Reset</button>
        </div>
      </form>
      <NotEnoughBalance
        displayState={notEnoughBalance ? "alert-modal-wrapper show" : "alert-modal-wrapper"}
        closeState={()=> notEnoughBalance ? setNotEnoughBalance(false) : setNotEnoughBalance(true)}
      />
      <TransactionSuccessful
        displayState={transactionSuccessful ? "alert-modal-wrapper show" : "alert-modal-wrapper"}
        closeState={()=> transactionSuccessful ? setTransactionSuccessful(false) : setTransactionSuccessful(true)}
        resetState={resetState}
      />
      <InvalidAmount 
        displayState={invalidAmount ? "alert-modal-wrapper show" : "alert-modal-wrapper"}
        closeState={()=> invalidAmount ? setInvalidAmount(false) : setInvalidAmount(true)}
      />
       <SameAccountError 
        displayState={sameAccError ? "alert-modal-wrapper show" : "alert-modal-wrapper"}
        closeState={()=> sameAccError ? setSameAccError(false) : setSameAccError(true)}
      />
    </section>
  )
}
