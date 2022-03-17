import './../css/index.css';
import React from 'react';

export default function SectionTwo() {
  return (
    <div className='section-two'>
      <div className='left-grid'>
        <h1>
          Best Payment Services For Your Transaction
        </h1>
        <div className='desc'>
          Make it easier for you to make transaction through
          our payment service with NOBLE BANK.
        </div>
      </div>
      <div className='right-grid'>
        <div className='icon-desc'>
          <i className="fa-solid fa-shield"></i>
          Keeping<br></br>secrecy
        </div>
        <div className='icon-desc'>
          <i className="fa-solid fa-dollar-sign"></i>
          Free transaction<br></br>fee
        </div>
        <div className='icon-desc'>
          <i className="fa-solid fa-lock"></i>
          Security<br></br>Guaranteed
        </div>
        <div className='icon-desc'>
          <i className="fa-solid fa-credit-card"></i>
          All in one<br></br>Noble Bank app
        </div>
      </div>
    </div>
  )
}