import React from 'react'
import './../css/index.css';

export default function TransferControl(props) {
  const { displayFeature } = props;
  
  return (
    <section className='transfer-control-wrapper'>
      <div className={displayFeature}>
        <label htmlFor="acc-no-of-sender">Enter Account No. of Sender</label>
        <input type="number" name='acc-no-of-sender'/>
      </div>
      <div className='receiver-acc-no'>
        <label htmlFor="receiver-acc-no">Enter Account No. of Receiver</label>
        <input type="number" name='receiver-acc-no'/>
      </div>
      <div className='transfer-enter-amount'>
        <label htmlFor="amount">Enter an Amount</label>
        <input type="number" name='amount'/>
      </div>
      <div className='transfer-triggers'>
        <button>Transfer</button>
        <button>Reset</button>
      </div>
    </section>
  )
}
