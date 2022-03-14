import React from 'react'
import './../css/index.css';
import CurrencyOptions from './CurrencyOptions';
import placeCommas from '../utils/placeCommas';

export default function DepositControl(props) {
  const { displayFeature } = props;

  return (
    <section className='deposit-control-wrapper'>
      <div className='withdraw-deposit-title'>
      Deposit
    </div>
      <div className={displayFeature}>
        <label htmlFor="enter-acc-no">Enter Account No.</label>
        <input type="number" name='enter-acc-no'/>
      </div>
      <div className='deposit-enter-amount'>
        <label htmlFor="amount">Enter an Amount</label>
        <CurrencyOptions />
        <input type="text" name='amount' onKeyUp={placeCommas}/>
      </div>
      <div className='deposit-triggers'>
        <button>Deposit</button>
        <button>Reset</button>
      </div>
    </section>
  );
}
