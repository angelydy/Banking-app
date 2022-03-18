import React, { useState, useEffect } from 'react';
import AccountsTable from '../components/AccountsTable';
import CurrencyOptions from '../components/CurrencyOptions'
import WithdrawControl from '../components/WithdrawControl';
import DepositControl from '../components/DepositControl';
import TransferControl from '../components/TransferControl';
import generateAccNum from '../utils/generateAccNum';
import Navbar from '../components/Navbar';
import placeCommas from '../utils/placeCommas';
import {v4 as uuidv4} from 'uuid';
import { UserAlreadyExist, AddUserSuccessful, SelectParentAcc } from '../components/AlertModals';
import './../css/index.css';
import Footer from '../components/Footer';
import { AccountOptions } from '../components/AccountOptions';
import History from '../components/History';

export default function AdminScreen() {
  const [userInfo, setUserInfo] = useState([]);
  const [accountNumber, setAccountNumber] = useState(generateAccNum);
  const [lastName, setLastname] = useState('');
  const [firstName, setFirstname] = useState('');
  const [middleName, setMiddlename] = useState('');
  const [accType, setAccType] = useState('Savings');
  const [initDeposit, setInitDeposit] = useState('');
  const [accMatch, setAccMatch] = useState('')
  const [status, setStatus] = useState(0)
  const [selectParentAcc, setSelectParentAcc] = useState(false)
  const [ifUserAlreadyExist, setIfUserAlreadyExist] = useState(false)
  const [addUserSuccess, setAddUserSuccess] = useState(false)
  const [accLabel, setAccLabel] = useState('Please select Parent Account Number');
  const [history, setHistory] = useState([])
  const [displayHistory, setDisplayHistory] = useState(false)
  const today = new Date();
  const hrs24 = today.getHours();

  useEffect(()=> {
    const getUsers = JSON.parse(localStorage.getItem("users"));
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
        acccateg: "Parent",
        acctype: "Savings",
        balance: '15,000'
      }, 
      {
        accNum: "RP 142 1905 0428", 
        lname: "Penitente,",
        fname: "Romulo", 
        mname: "Torres",
        acccateg: "Parent",
        acctype: "Savings",
        balance: '52,623'
      }, 
    ]
    setUserInfo([...defaultUsers, ...userInfo]);
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

  function handleAccType(e) {
    setAccType(e.target.value);
  }

  function handleInitDeposit(e) {
    const amount = e.target.value.replace(/,/gi, "").split(/(?=(?:\d{3})+$)/).join(",");
    setInitDeposit(amount);
  }
  
  function handleAdd(e) {
    e.preventDefault()
    console.log(hrs24)
    let addUserInfo
    if(status == 1 && accMatch !== '') {
      handleAccountNumber();
      addUserInfo = {
        accNum: accountNumber, 
        lname: lastName,
        fname: firstName, 
        mname: middleName,
        acccateg: "Child",
        acctype: accType,
        balance: initDeposit,
        parentAcc: accMatch
      };
      const checkUserExist = userInfo.findIndex(user => user.lname == lastName && user.fname == firstName)
      if(!userInfo[checkUserExist]) {
        setAddUserSuccess(true)
        setUserInfo([...userInfo, addUserInfo]);
      } else {
        setIfUserAlreadyExist(true)
      }
    } else if(status == 0) {
      handleAccountNumber();
      addUserInfo = {
        accNum: accountNumber, 
        lname: lastName,
        fname: firstName, 
        mname: middleName,
        acccateg: "Parent",
        acctype: accType,
        balance: initDeposit,
      };
      const checkUserExist = userInfo.findIndex(user => user.lname == lastName && user.fname == firstName)
      if(!userInfo[checkUserExist]) {
        setAddUserSuccess(true)
        setUserInfo([...userInfo, addUserInfo]);
      } else {
        setIfUserAlreadyExist(true)
      }
    } else {
      setSelectParentAcc(true)
    }
    e.target.reset();
    resetState();
  }

  function resetState() {
    setLastname('');
    setFirstname('');
    setMiddlename('');
    setAccType('Savings');
    setInitDeposit();
    setStatus(0)
    setAccMatch()
    setAccLabel('Please select Parent Account Number')
  }

  return (
    <div className="admin-main-container">
      <Navbar/>
      <h1 className='greeting'>{getHours(hrs24)}</h1>
      <section className="admin-wrapper">
        <div className='historyBtn'>
          <i class="fa-solid fa-clock-rotate-left" onClick={()=> setDisplayHistory(true)}></i>
        </div>
        <AccountsTable passedUserInfo={userInfo} setPassedUserInfo={setUserInfo} />
        <section className='add-account-control-wrapper'>
          <form id="add-account-form" onSubmit={handleAdd}>
            <div className='add-user-title'>Add New User</div>
            <div className='user-name'>
              <div>
                <label htmlFor="lastname">Last Name</label>
                <input required id='test' type="text" name='lastname' onChange={handleLastName}/>
              </div>
              <div>
                <label htmlFor="firstname">First Name</label>
                <input required type="text" name='firstname' onChange={handleFirstName}/>
              </div>
              <div>
                <label htmlFor="middlename">Middle Name</label>
                <input type="text" name='middlename' onChange={handleMiddleName}/>
              </div>
            </div>
            <div className='add-account-acc-category'>
              <label htmlFor="acc-category">Account Category</label>
              <div>
                <input type="radio" value="Parent" name='acc-category' defaultChecked onClick={()=> setStatus(0)}/> Parent
              </div>
              <div>
                <input type="radio" value="Child" name='acc-category' onClick={()=> setStatus(1)}/> Child
              </div>
            </div>
            {status == 1 && 
              <AccountOptions passedUserInfo={userInfo} onSetAccLabel={setAccLabel} selectedAccLabel={accLabel} onSelectAcc={setAccMatch} selectedAcc={accMatch}/>
            }
            <div className='add-account-acc-type'>
              <label htmlFor="acc-type">Account Type</label>
              <div>
                <input type="radio" value="Savings" name='acc-type' defaultChecked onChange={handleAccType}/> Savings
              </div>
              <div>
                <input type="radio" value="Checking" name='acc-type' onChange={handleAccType}/> Checking
              </div>
            </div>
            <div className='initial-deposit'>
              <div>
                <label htmlFor="initial-deposit">Initial Deposit</label>
              </div>
              <div className='currency-and-amount'>
                <CurrencyOptions />
                <input required type="text" pattern='[^0-9 \,]' name='initial-deposit' onChange={handleInitDeposit} onKeyUp={placeCommas}/>
              </div>
            </div>
            <div className="add-account-triggers">
              <button>Add Account</button>
              <button onClick={resetState} type='reset'>Reset</button>
            </div>
          </form>
          <section className='admin-wrapper-bottom'>
        <div className='withdraw-deposit-container'>
          <div className='withdraw-deposit'>
            <div>
              <WithdrawControl 
              currentUsers={userInfo} 
              setCurrentUser={setUserInfo} 
              displayFeature="enter-acc-no" 
              passedHistory={history}
              setPassedHistory={setHistory}
              />
            </div>
            <div>
              <DepositControl 
              currentUsers={userInfo} 
              setCurrentUser={setUserInfo} 
              displayFeature="enter-acc-no"  
              passedHistory={history}
              setPassedHistory={setHistory}
              />
            </div>
          </div>
          <div className='transfer-control'>
            <TransferControl 
            currentUsers={userInfo} 
            setCurrentUser={setUserInfo} 
            displayFeature="enter-acc-no"  
            passedHistory={history}
            setPassedHistory={setHistory}
            />
          </div>
        </div>
        </section>
        </section>
      </section>
      <Footer />
      <UserAlreadyExist
        displayState={ifUserAlreadyExist ? "alert-modal-wrapper show" : "alert-modal-wrapper"}
        closeState={()=> ifUserAlreadyExist ? setIfUserAlreadyExist(false) : setIfUserAlreadyExist(true)}
      />
      <AddUserSuccessful 
        displayState={addUserSuccess ? "alert-modal-wrapper show" : "alert-modal-wrapper"}
        closeState={()=> addUserSuccess ? setAddUserSuccess(false) : setAddUserSuccess(true)}
      />
      <SelectParentAcc
      displayState={selectParentAcc ? "alert-modal-wrapper show" : "alert-modal-wrapper"}
      closeState={()=> selectParentAcc ? setSelectParentAcc(false) : setSelectParentAcc(true)}
      />
      <History
      displayState={displayHistory ? "alert-modal-wrapper show" : "alert-modal-wrapper"}
      closeState={()=> displayHistory ? setDisplayHistory(false) : setDisplayHistory(true)}
      historyMessage={history}
      />
    </div>
  );
}
