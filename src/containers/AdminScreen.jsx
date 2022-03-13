import React, { useState, useEffect } from 'react';
import AccountsTable from '../components/AccountsTable';
import CurrencyOptions from '../components/CurrencyOptions'
import WithdrawControl from '../components/WithdrawControl';
import DepositControl from '../components/DepositControl';
import TransferControl from '../components/TransferControl';
import generateAccNum from '../utils/generateAccNum';
import Navbar from '../components/Navbar';
import './../css/index.css';

export default function AdminScreen() {
  const [userInfo, setUserInfo] = useState([]);
  const [ accountNumber, setAccountNumber ] = useState(generateAccNum);
  const [ lastName, setLastname ] = useState('');
  const [ firstName, setFirstname ] = useState('');
  const [ middleName, setMiddlename ] = useState('');
  const [ accCategory, setAccCategory ] = useState('Parent');
  const [ accType, setAccType ] = useState('Savings');
  const [ initDeposit, setInitDeposit ] = useState();
  const today = new Date();
  const hrs24 = today.getHours();

  useEffect(()=> {
    const defaultUsers = [
      {
        accNum: "RP 142 4200 2804", 
        lname: "Doe,",
        fname: "Jane", 
        mname: "Dela Cruz",
        acccateg: "Parent",
        acctype: "Checking",
        balance: '55,000'
      }, 
      {
        accNum: "RP 142 1026 0124", 
        lname: "Sorima,",
        fname: "Victoria", 
        mname: "Desa",
        acccateg: "Child",
        acctype: "Savings",
        balance: '15,000'
      }, 
      {
        accNum: "RP 142 1905 0428", 
        lname: "Odinson,",
        fname: "Thor", 
        mname: "",
        acccateg: "Child",
        acctype: "Savings",
        balance: 3000
      }, 
    ]
    setUserInfo([...userInfo, ...defaultUsers]);
  }, [])

  useEffect(() => {
    const getUsers = JSON.parse(localStorage.getItem("users"));
    if(getUsers) setUserInfo(getUsers);
  }, [])
  

  useEffect(()=> {
    localStorage.setItem("users", JSON.stringify(userInfo))
  }, [userInfo])

  function getHours(h) {
    if (h < 12) {
      return 'Good Morning, Admin'
    } else if (h <= 18) {
      return 'Good Afternoon, Admin'
    } else {
      return 'Good Evening, Admin'
    }
  }

  function handleAccountNumber() {
    setAccountNumber(generateAccNum);
  }

  function handleLastName(e) {
    setLastname(`${e.target.value.trim()},`);
  }

  function handleFirstName(e) {
    setFirstname(e.target.value.trim());
  }

  function handleMiddleName(e) {
    setMiddlename(e.target.value.trim());
  }

  function handleAccCategory(e) {
    setAccCategory(e.target.value);
  }

  function handleAccType(e) {
    setAccType(e.target.value);
  }

  function placeCommas(e) {
    if (
      (e.which >= 37 && e.which <= 40) ||
      (e.keyCode >= 37 && e.keyCode <= 40)
    ) {
      return;
    }
    e.target.value = e.target.value.replace(/,/gi, "")
      .split(/(?=(?:\d{3})+$)/)
      .join(",");
  }

  function handleInitDeposit(e) {
    setInitDeposit(e.target.value);
  }
  
  function handleAdd(e) {
    e.preventDefault();
    handleAccountNumber();
    const user = {
      accNum: accountNumber, 
      lname: lastName,
      fname: firstName, 
      mname: middleName,
      acccateg: accCategory,
      acctype: accType,
      balance: initDeposit
    };
    setUserInfo([...userInfo, user]);
    e.target.reset();
    setInitDeposit();
  }

  function resetState() {
    setLastname('');
    setFirstname('');
    setMiddlename('');
    setAccCategory('Parent');
    setAccType('Savings');
    setInitDeposit();
  }

  return (
    <div>
      <Navbar />
      <h1 className='greeting'>{getHours(hrs24)}</h1>
      <section className="admin-wrapper">
        <AccountsTable passedUserInfo={userInfo} />
        <section className='add-account-control-wrapper'>
          <form id="add-account-form" onSubmit={handleAdd}>
            <div className='user-name'>
              <label htmlFor="lastname">Last Name</label>
              <input id='test' type="text" name='lastname' onChange={handleLastName}/>
              <label htmlFor="firstname">First Name</label>
              <input type="text" name='firstname' onChange={handleFirstName}/>
              <label htmlFor="middlename">Middle Name</label>
              <input type="text" name='middlename' onChange={handleMiddleName}/>
            </div>
            <div>
              <label htmlFor="acc-category">Account Category</label>
              <input type="radio" value="Parent" name='acc-category' defaultChecked onChange={handleAccCategory}/> Parent
              <input type="radio" value="Child" name='acc-category' onChange={handleAccCategory}/> Child
            </div>
            <div>
              <label htmlFor="acc-type">Account Type</label>
              <input type="radio" value="Savings" name='acc-type' defaultChecked onChange={handleAccType}/> Savings
              <input type="radio" value="Checking" name='acc-type' onChange={handleAccType}/> Checking
            </div>
            <label htmlFor="initial-deposit">Initial Deposit (Optional)</label>
            <CurrencyOptions />
            <input type="text" pattern='[^0-9 \,]' name='initial-deposit' onKeyUp={placeCommas} onChange={handleInitDeposit}/>
            <div className="add-account-triggers">
              <button>Add Account</button>
              <button onClick={resetState} type='reset'>Reset</button>
            </div>
          </form>
        </section>
      </section>
      <section className='admin-wrapper-bottom'>
        <div className='withdraw-deposit-title'>
          <p>
            Withdraw
          </p>
          <p>
            Deposit
          </p>
          <p>
            Transfer
          </p>
        </div>
        <div className='withdraw-deposit-transfer'>
          <WithdrawControl displayFeature="enter-acc-no" />
          <DepositControl displayFeature="enter-acc-no" />
          <TransferControl displayFeature="enter-acc-no" />
        </div>
      </section>

    </div>
  );
}
