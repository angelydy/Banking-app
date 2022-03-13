import React, { useState } from 'react';
import AccountsTable from '../components/AccountsTable';
import CurrencyOptions from '../components/CurrencyOptions'
import WithdrawControl from '../components/WithdrawControl';
import DepositControl from '../components/DepositControl';
import TransferControl from '../components/TransferControl';
import generateAccNum from '../utils/generateAccNum';
import './../css/index.css';

export default function AdminScreen() {
  const [userInfo, setUserInfo] = useState([])
  const [ accountNumber, setAccountNumber ] = useState(generateAccNum)
  const [ lastName, setLastname ] = useState('')
  const [ firstName, setFirstname ] = useState('')
  const [ middleName, setMiddlename ] = useState('')
  // const [ accCategory, setAccCategory ] = useState('');
  // const [ accType, setAccType ] = useState('');
  // const [ initialDeposit, setInitialDeposit ] = useState('');

  function handleAccountNumber() {
    setAccountNumber(generateAccNum)
  }

  function handleLastName(e) {
    setLastname(e.target.value)
  }

  function handleFirstName(e) {
    setFirstname(e.target.value)
  }

  function handleMiddleName(e) {
    setMiddlename(e.target.value)
  }

  function handleAdd(e) {
    e.preventDefault()
    handleAccountNumber()
    const user = {
      accNum: accountNumber, 
      lname: lastName,
      fname: firstName, 
      mname: middleName
    }

    setUserInfo([...userInfo, user])

    document.getElementById('add-account-form').reset()
  }

  return (
    <section className="admin-wrapper">
      <AccountsTable passedUserInfo={userInfo} />
      <section className='add-account-control-wrapper'>
        <form id="add-account-form" onSubmit={handleAdd}>
          <label htmlFor="lastname">Last Name</label>
          <input id='test' type="text" name='lastname' onChange={handleLastName}/>
          <label htmlFor="firstname">First Name</label>
          <input type="text" name='firstname' onChange={handleFirstName}/>
          <label htmlFor="middlename">Middle Name</label>
          <input type="text" name='middlename' onChange={handleMiddleName}/>
          <div>
            <label htmlFor="acc-category">Account Category</label>
            <input type="radio" value="Parent" name='acc-category'/> Parent
            <input type="radio" value="Child" name='acc-category'/> Child
          </div>
          <div>
            <label htmlFor="acc-type">Account Type</label>
            <input type="radio" value="Savings" name='acc-type'/> Savings
            <input type="radio" value="Checking" name='acc-type'/> Checking
          </div>
          <label htmlFor="initial-deposit">Initial Deposit (Optional)</label>
          <CurrencyOptions />
          <input type="number" name='initial-deposit' />
          <div className="add-account-triggers">
            <button>Add Account</button>
            <button>Reset</button>
          </div>
        </form>
      </section>
      <WithdrawControl displayFeature="enter-acc-no" />
      <DepositControl displayFeature="enter-acc-no" />
      <TransferControl displayFeature="enter-acc-no" />
    </section>
  );
}
