import React, { useState, useEffect } from 'react'
import UserExpenses from '../components/UserExpenses'
import DepositControl from '../components/DepositControl';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import TransferControl from '../components/TransferControl';
import WithdrawControl from '../components/WithdrawControl';
import './../css/index.css';
import UserInfo from '../components/UserInfo';

export default function UserScreen() {
  const [userInfo, setUserInfo] = useState([]);
  const [history, setHistory] = useState([])
  const loggedUser = JSON.parse(localStorage.getItem("loggedUser"))
  const [name, setName] = useState('')
  const [userName, setUserName] = useState('')
  const [accCateg, setAccCateg] = useState('')
  const [accType, setAccType] = useState('')
  const [balance, setBalance] = useState('')
  const [haveChildren, setHaveChildren] = useState(true)

  useEffect(()=> {
    const getUsers = JSON.parse(localStorage.getItem("users"));
    const getHistory = JSON.parse(localStorage.getItem("history"));
    setUserInfo([...userInfo]);
    setHistory([...history])
    if(getUsers) setUserInfo(getUsers);
    if(getHistory) setHistory(getHistory)
  }, [])

  function renderInfo() {
    userInfo.find(user => {
      if(user.accNum == loggedUser) {
        setUserName(user.username)
        setName(`${user.lname} ${user.fname} ${user.mname}`)
        setAccCateg(user.acccateg)
        setAccType(user.acctype)
        setBalance(user.balance)

        if(user.acctype !== 'Parent') {
          setHaveChildren(false)
        }
      }
    })
  }

  useEffect(()=> {
    localStorage.setItem("history", JSON.stringify(history))
  }, [history])

  useEffect(()=> {
    localStorage.setItem("users", JSON.stringify(userInfo))
  }, [userInfo])

  return (
    <section className='user-wrapper'>
      <div>
      <Navbar />
      </div>
      {/* <UserExpenses /> */}
      <div className='user-screen-grid'>
        <div className='grid-one'>
          <div className='dashboard-title'> DASHBOARD</div>
          <UserInfo 
            accessingUser={loggedUser} 
            passedName={name} 
            passedUserName={userName} 
            passedAccCateg={accCateg} 
            passedAccType={accType} 
            passedBalance={balance} 
            ifHaveChildren={haveChildren}
          />
          <TransferControl 
              currentUsers={userInfo} 
              setCurrentUser={setUserInfo} 
              displayFeature="enter-acc-no" 
              passedHistory={history}
              setPassedHistory={setHistory}
              accessingUser={loggedUser}
            />
        </div>
        <div className='grid-two'>
          <div className='withdraw-deposit'>
          <DepositControl 
            currentUsers={userInfo} 
            setCurrentUser={setUserInfo} 
            displayFeature="enter-acc-no" 
            passedHistory={history}
            setPassedHistory={setHistory}
            accessingUser={loggedUser}
          />
          <WithdrawControl 
            currentUsers={userInfo} 
            setCurrentUser={setUserInfo} 
            displayFeature="enter-acc-no" 
            passedHistory={history}
            setPassedHistory={setHistory}
            accessingUser={loggedUser}
          />
          </div>
        </div>
      </div>
      <div>
      <Footer />
      </div>
      <div>
        <button onClick={renderInfo}>Start</button>
      </div>
    </section>
  );
}
