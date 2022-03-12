import React from 'react'
import './../css/index.css';
import CurrencyOptions from './CurrencyOptions';

export default function DepositControl(props) {
  const { displayFeature } = props;

  return (
    <section className='deposit-control-wrapper'>
      <div className={displayFeature}>
        <label htmlFor="enter-acc-no">Enter Account No.</label>
        <input type="number" name='enter-acc-no'/>
      </div>
      <div className='deposit-enter-amount'>
        <label htmlFor="amount">Enter an Amount</label>
        <CurrencyOptions />
        <input type="number" name='amount'/>
      </div>
      <div className='deposit-triggers'>
        <button>Deposit</button>
        <button>Reset</button>
      </div>
    </section>
  );
}
