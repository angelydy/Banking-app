import React, { useState, useEffect } from 'react';
import AlertModals from '../components/AlertModals';
import { AccountOptions } from '../components/AccountOptions';
import AccountsTable from '../components/AccountsTable';
import CurrencyOptions from '../components/CurrencyOptions'
import WithdrawControl from '../components/WithdrawControl';
import DepositControl from '../components/DepositControl';
import TransferControl from '../components/TransferControl';
import generateAccNum from '../utils/generateAccNum';
import Navbar from '../components/Navbar';
import placeCommas from '../utils/placeCommas';
import Footer from '../components/Footer';
import History from '../components/History';
import './../css/index.css';

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
  const [ifUserAlreadyExist, setIfUserAlreadyExist] = useState(false)
  const [invalidAmount, setInvalidAmount] = useState(false)
  const [invalidName, setInvalidName] = useState(false)
  const [addUserSuccess, setAddUserSuccess] = useState(false)
  const [accLabel, setAccLabel] = useState('Please select Parent Account Number');
  const [history, setHistory] = useState([])
  const [displayHistory, setDisplayHistory] = useState(false)
  const today = new Date();
  const hrs24 = today.getHours();

  useEffect(()=> {
    const getUsers = JSON.parse(localStorage.getItem("users"));
    const getHistory = JSON.parse(localStorage.getItem("history"));
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
    setHistory([...history])
    if(getUsers) setUserInfo(getUsers);
    if(getHistory) setHistory(getHistory)
  }, [])

  useEffect(()=> {
    localStorage.setItem("history", JSON.stringify(history))
  }, [history])

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
    setLastname(`${e.target.value.trim()},`)
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
    let addUserInfo
    if(initDeposit.match(/[a-zA-Z]/) || initDeposit < 2000) {
      setInvalidAmount(true)
      e.target.reset()
      resetState()
      return
    }
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
        <div className='historyBtn' onClick={()=> setDisplayHistory(true)}>
          <i className="fa-solid fa-clock-rotate-left"></i>
          View Transaction History
        </div>
        <AccountsTable passedUserInfo={userInfo} setPassedUserInfo={setUserInfo} />
        <section className='add-account-control-wrapper'>
          <form autoComplete='off' id="add-account-form" onSubmit={handleAdd}>
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
                <input required type="text" name='initial-deposit' onChange={handleInitDeposit} onKeyUp={placeCommas}/>
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
                accessingUser={'admin'}
              />
            </div>
            <div>
              <DepositControl 
                currentUsers={userInfo} 
                setCurrentUser={setUserInfo} 
                displayFeature="enter-acc-no"  
                passedHistory={history}
                setPassedHistory={setHistory}
                accessingUser={'admin'}
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
              accessingUser={'admin'}
            />
          </div>
        </div>
        </section>
        </section>
      </section>
      <Footer />
      <AlertModals
        displayState={ifUserAlreadyExist ? "alert-modal-wrapper show" : "alert-modal-wrapper"}
        closeState={()=> ifUserAlreadyExist ? setIfUserAlreadyExist(false) : setIfUserAlreadyExist(true)}
        boldAlert={'OOPS!'}
        message={"Sorry, this user already exists."}
        image={"https://img.icons8.com/cotton/50/000000/error--v4.png"}
      />
      <AlertModals 
        displayState={addUserSuccess ? "alert-modal-wrapper show" : "alert-modal-wrapper"}
        closeState={()=> addUserSuccess ? setAddUserSuccess(false) : setAddUserSuccess(true)}
        boldAlert={'GREAT!'}
        message={"Add user was successful."}
        image={"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAADmklEQVRoge2ZTWgWRxjH/5Ok0RgkaUIRLVhoTTBGSUHjB6X21DbQWw8VWvSgnlRayUV6U3oWeqqIoF4EEb96a7WFNGLIRWhLiii2IJooIcZETOtH4q+HfZYsL8mb3dnZNxHyvzxk33n+83t2drKzM9KiFlWIXFHGwBpJWyS1SmqUNCVpRFK/pF7n3GRRfecWUA3sBgYorzvA9pB9BxsRYKWkC5K22aUhSdclDUq6Z9fekdSlaJT+k3RK0hnnXF8ojlwCGoFbdrdvA58BM94koAo4WjJCZ4FlleaeCe60Ad0AGlK0rwLWAQeBYcu9WAnWclCrgUngJdDhkf8uMGrFdBXBmBZkn0FcyOFxOH7EQrJlhbhkEHtyeLSZx98h2bJC9BvE1hwe1cAz4JXvpK/y7TyhZotjvgbOuSlJzxW9Dmp9PEIUEr+hyelTY/GVT3KIQoYtrvA1AJokLZM04Zx74uMRopAHFlfl8Gix+I+vQYhC/rSY+R2S0IcWr/sahCjkhsXNOTw+snjN1yBEIbFHJ1BTtuUMAmo1PSLjAXj8BPTYe+TQbAvFOfId8K15/FIEY1qQmwbhPUeADvP4y9cjxKM1YHFjDo9Oi96F5Bawy+7mXaDbI7/bcgF2FsGYFqQaOG/rpHEg9Sjbd8l4vHoGqotkTQv1uwG1Z8jZYDk38/YfYo7E+s3iVxlyvizJnX8BG+3ujgJvpWjfBDyynA8qwZhawGUD6wGay7RbDvxsba9WkjGVgLeBh3N9aAFrrc0Y8F6IvkPOETnnBhXtY6Xtd8Q5F+TzNmghpjRfePFH2JJQnRZRyFKLT8u0mbC4MAsBVkhaaX+WW8mOKxqVBmB1SIbcspfbHzaJf0rR/lz8MgQ2VYJxLqB24BjwwsBuE21oz5XXzPSu/SRwEni/EsxJiBrgc+BXW2MBTBHtATdm8FkOnLDcWNeAL4A3iixgKXCA6dUqwARwHFifw7cN+AF4mvC9D3wD1IUswBEd4AwmOhoAvgbeDNhPA7A/MdcAhoC9eHx9lprXAz8mjPupwK458DHQl+j3MlDva7YE6DWjEWBHYN40DDsTj1wv0WZFZpPvzeAe0FoAZ1qODcYAcDRrcgvR4c0UsKUgxiw8W43lBdGJcerE7+wOXCmQL5OAq8Z0pPS3ckuUTyxeKgbLS/E546elP8z6Lw14rOigfyHqsXOuKXlhtiPkOkn/VgTJX3XOuWfzDbGoRb0u+h/xDJ/HHlzXCgAAAABJRU5ErkJggg=="}
      />
      <AlertModals 
        displayState={invalidAmount ? "alert-modal-wrapper show" : "alert-modal-wrapper"}
        closeState={()=> invalidAmount ? setInvalidAmount(false) : setInvalidAmount(true)}
        boldAlert={'OOPS!'}
        message={"Sorry, the amount is invalid."}
        image={"https://img.icons8.com/cotton/50/000000/error--v4.png"}
      />
      <AlertModals 
        displayState={invalidName ? "alert-modal-wrapper show" : "alert-modal-wrapper"}
        closeState={()=> invalidName ? setInvalidName(false) : setInvalidName(true)}
        boldAlert={'OOPS!'}
        message={"Sorry, the name/names is/are invalid."}
        image={"https://img.icons8.com/cotton/50/000000/error--v4.png"}
      />
      <History
      displayState={displayHistory ? "alert-modal-wrapper show" : "alert-modal-wrapper"}
      closeState={()=> displayHistory ? setDisplayHistory(false) : setDisplayHistory(true)}
      historyMessage={history}
      setHistoryList={setHistory}
      />
    </div>
  );
}
