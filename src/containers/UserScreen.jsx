import React, { useState, useEffect } from 'react'
import UserExpenses from '../components/UserExpenses'
import DepositControl from '../components/DepositControl';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import TransferControl from '../components/TransferControl';
import WithdrawControl from '../components/WithdrawControl';
import History from '../components/History';
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
  const [isParent, setIsParent] = useState(true)
  const [childAccNum, setChildAccNum] = useState([])
  const [childName, setChildName] = useState([])
  const [hasChildren, setHasChildren] = useState(false)
  const [displayModal, setDisplayModal] = useState('welcome-modal')
  const [displayHistory, setDisplayHistory] = useState(false)
  const [childArray, setChildArray] = useState([])
  const [historyArray, setHistoryArray] = useState([])
  let children = []
  let userHistory = []

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
    history.find(history => {
      if(history.accNum === loggedUser) {
        userHistory.push(history.history)
        setHistoryArray(userHistory)
      }
    })
  }, [history])

  useEffect(()=> {
    localStorage.setItem("users", JSON.stringify(userInfo))
    userInfo.find(user => {
      if(user.accNum == loggedUser) {
        setBalance(user.balance)
      }
      if(user.parentAcc == loggedUser) {
        children.push(user.balance)
        setChildArray(children)
      }
    })
  }, [userInfo])

  function renderInfo() {
    userInfo.find(user => {
      if(user.accNum == loggedUser) {
        setUserName(user.username)
        setName(`${user.lname} ${user.fname} ${user.mname}`)
        setAccCateg(user.acccateg)
        setAccType(user.acctype)
        setBalance(user.balance)

        if(user.acccateg !== 'Parent') {
          setIsParent(false)
        }
      }
      if(user.parentAcc == loggedUser) {
        setChildAccNum(prevChild => [...prevChild, user.accNum])
        setChildName(prevChild =>  [...prevChild,`${user.lname} ${user.fname} ${user.mname}`])
        setHasChildren(true)
      }
    })
    setDisplayModal('welcome-modal hide')
  }

  return (
    <section className='user-wrapper'>
      <div className={displayModal}>
        <div className='welcome-container'>
          <div className='welcome-modal-icon'>🎉</div>
          <h1>Welcome on board!</h1>
          <div className='short-desc'>Start saving today</div>
          <button onClick={renderInfo}>Let's Go</button>
        </div>
      </div>
      <div>
      <Navbar />
      </div>
      <div className='user-screen-grid'>
        <div className='grid-one'>
          <div className='historyBtn' onClick={()=> setDisplayHistory(true)}>
            <i className="fa-solid fa-clock-rotate-left"></i>
            View Transaction History
          </div>
          <History
            displayState={displayHistory ? "alert-modal-wrapper show" : "alert-modal-wrapper"}
            closeState={()=> displayHistory ? setDisplayHistory(false) : setDisplayHistory(true)}
            historyMessage={historyArray}
            accessingUser={loggedUser}
          />
          <UserInfo 
            accessingUser={loggedUser} 
            passedName={name} 
            passedUserName={userName} 
            passedAccCateg={accCateg} 
            passedAccType={accType} 
            passedBalance={balance} 
            ifParent={isParent}
            passedChildAccNum={childAccNum}
            passedChildName={childName}
            ifHasChildren={hasChildren}
            passedChildArray={childArray}
          />
        </div>
        <div className='grid-two'>
        <UserExpenses 
            accessingUser={loggedUser}
            passedBalance={balance}
            setPassedBalance={setBalance}
            passedHistory={history}
            setPassedHistory={setHistory}
          />
        <div className='withdraw-deposit'>
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
          </div>
          <div className='transfer-control'>
          <TransferControl 
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
      <Footer />
    </section>
  );
}
