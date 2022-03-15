import React, { useState } from 'react'
import './../css/index.css';
import CurrencyOptions from './CurrencyOptions';
import placeCommas from '../utils/placeCommas';

export default function TransferControl(props) {
  const { displayFeature, currentUsers, setCurrentUser } = props;
  const [accNumMatchFrom, setAccNumMatchFrom] = useState(false);
  const [matchedAccFrom, setAccMatchFrom] = useState('');
  const [accNumMatchTo, setAccNumMatchTo] = useState(false);
  const [matchedAccTo, setAccMatchTo] = useState('');
  const [transferAmount, setTransferAmount] = useState()
  
  function validateAccNumFrom(e) {
    currentUsers.findIndex(acc => {
      if(acc.accNum === e.target.value) {
        setAccNumMatchFrom(true)
        setAccMatchFrom(acc.accNum)
      }
    });
  }

  function validateAccNumTo(e) {
    currentUsers.findIndex(acc => {
      if(acc.accNum === e.target.value) {
        setAccNumMatchTo(true)
        setAccMatchTo(acc.accNum)
      }
    });
  }

  function storeTransferAmount(e) {
    setTransferAmount(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault()
    if(accNumMatchFrom && accNumMatchTo) {
      currentUsers.findIndex(acc => {
        if(acc.accNum === matchedAccFrom) {
          let newBalance = Number(acc.balance.split(',').join(''))
          let transfer = Number(transferAmount.split(',').join('')) 
          if(newBalance > transfer) {
            newBalance -= transfer
            acc.balance = newBalance.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")
          } else {
            alert('Not enough mana')
          }
          // console.log(acc)
        }
        if(acc.accNum === matchedAccTo) {
          // console.log(acc)
          let newBalance = Number(acc.balance.split(',').join(''))
          let transfer = Number(transferAmount.split(',').join('')) 
          newBalance += transfer
          acc.balance = newBalance.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")
        }
        setCurrentUser([...currentUsers])
      })
    } else {
      alert('Not valid accounts')
    }
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
          <input type="text" name='acc-no-of-sender' onChange={validateAccNumFrom}/>
        </div>
        <div className='receiver-acc-no'>
          <label htmlFor="receiver-acc-no">Enter Account No. of Receiver</label>
          <input type="text" name='receiver-acc-no' onChange={validateAccNumTo}/>
        </div>
        <div className='transfer-enter-amount'>
          <label htmlFor="amount">Enter an Amount</label>
          <CurrencyOptions />
         <div>
          <input type="text" name='amount' onKeyUp={placeCommas} onChange={storeTransferAmount}/>
        </div>
      </div>
      </div>
        <div className='transfer-triggers'>
          <button>Transfer</button>
          <button>Reset</button>
        </div>
      </form>
    </section>
  )
}
