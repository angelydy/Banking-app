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

  useEffect(()=> {
    const getUsers = JSON.parse(localStorage.getItem("users"));
    const getHistory = JSON.parse(localStorage.getItem("history"));
    setUserInfo([...userInfo]);
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

  return (
    <section className='user-wrapper'>
      <div>
      <Navbar />
      </div>
      {/* <UserExpenses /> */}
      <div className='user-screen-grid'>
        <div className='grid-one'>
          <div className='dashboard-title'> DASHBOARD</div>
          <UserInfo currentUsers={userInfo} />
          <div className='curr-balance'>
            <p className='balance-title'>Your Balance</p>
            <p className='balance-val'>P0.00</p>
            <div className='curr-status'>
              <p>Currency</p>
              <p>Status</p>
            </div>
            <div className='curr-status-val'>
              <p>PHP / Peso</p>
              <p>Active</p>
            </div>
          </div>
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
    </section>
  );
}
