import React, { useState, useEffect } from 'react'
import UserExpenses from '../components/UserExpenses'
import DepositControl from '../components/DepositControl';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import TransferControl from '../components/TransferControl';
import WithdrawControl from '../components/WithdrawControl';
import './../css/index.css';

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
      <Navbar />
      {/* <UserInfo /> */}
      {/* <UserExpenses /> */}
      <WithdrawControl 
        currentUsers={userInfo} 
        setCurrentUser={setUserInfo} 
        displayFeature="enter-acc-no" 
        passedHistory={history}
        setPassedHistory={setHistory}
        accessingUser={loggedUser}
      />
      <DepositControl 
        currentUsers={userInfo} 
        setCurrentUser={setUserInfo} 
        displayFeature="enter-acc-no" 
        passedHistory={history}
        setPassedHistory={setHistory}
        accessingUser={loggedUser}
      />
      <TransferControl 
        currentUsers={userInfo} 
        setCurrentUser={setUserInfo} 
        displayFeature="enter-acc-no" 
        passedHistory={history}
        setPassedHistory={setHistory}
        accessingUser={loggedUser}
      />
      <Footer />
    </section>
  );
}
