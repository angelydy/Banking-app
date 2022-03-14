import React from 'react'
import './../css/index.css';
import CurrencyOptions from './CurrencyOptions';
import placeCommas from '../utils/placeCommas';

export default function TransferControl(props) {
  const { displayFeature } = props;
  
  return (
    <section className='transfer-control-wrapper'>
      <div className='transfer-control-container'>
      <div className={displayFeature} id="sender-acc-no">
        <label htmlFor="acc-no-of-sender">Enter Account No. of Sender</label>
        <input type="number" name='acc-no-of-sender'/>
      </div>
      <div className='receiver-acc-no'>
        <label htmlFor="receiver-acc-no">Enter Account No. of Receiver</label>
        <input type="number" name='receiver-acc-no'/>
      </div>
      <div className='transfer-enter-amount'>
        <label htmlFor="amount">Enter an Amount</label>
        <CurrencyOptions />
        <input type="text" name='amount' onKeyUp={placeCommas}/>
      </div>
      </div>
      <div className='transfer-triggers'>
        <button>Transfer</button>
        <button>Reset</button>
      </div>
    </section>
  )
}
