import React from 'react'
import CurrencyOptions from './CurrencyOptions';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function AddAccountControl() {

  const [switchMode, setSwitchMode] = useState(false)
  const modeButton = () => {
    switchMode ? setSwitchMode(false) : setSwitchMode(true)
  };

  return (
    <section className='add-account-control-wrapper'>
      <div className='settings-log-out'>
      <a>
      <i class="fa-solid fa-moon" onClick={modeButton}></i>
      </a>
      <a>
        <Link 
          to={'/'}>
            <i class="fa-solid fa-right-from-bracket"></i>
        </Link>
      </a>
      </div>
      <div className='column-user-info'>
        <label htmlFor="lastname">Last Name</label>
        <input type="text" name='lastname' />
        <label htmlFor="firstname">First Name</label>
        <input type="text" name='firstname' />
        <label htmlFor="middlename">Middle Name</label>
        <input type="text" name='middlename' />
      </div>
      <label htmlFor="acc-category">Account Category</label>
        <div className='flex-radio-buttons'>
          <input type="radio" value="Parent" name='acc-category'/> Parent
          <input type="radio" value="Child" name='acc-category'/> Child
        </div>
      <label htmlFor="acc-type">Account Type</label>
      <div className='flex-radio-buttons'>
        <input type="radio" value="Savings" name='acc-type'/> Savings
        <input type="radio" value="Checking" name='acc-type'/> Checking
      </div>
      <label htmlFor="initial-deposit">Initial Deposit (Optional)</label>
      <div className='currency'>
        <CurrencyOptions />
        <input type="number" name='initial-deposit' />
      </div>
    </section>
  )
}
