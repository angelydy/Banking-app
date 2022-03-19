import React, { useEffect, useState } from 'react';
import './../css/index.css';
import leftimg from './../assets/business-woman.png';
import { AccountNotExist, PasswordNotMatch, SignUpSuccessful } from './AlertModals';

export default function SignUpModal({ displayState, closeState }) {
  const [accessingUser, setAccessingUser] = useState('')
  const [userEmail, setUserEmail] = useState('')
  const [userUsername, setUserUsername] = useState('')
  const [userPassword, setUserPassword] = useState('')
  const [userExists, setUserExists] = useState(false)
  const [passMatch, setPassMatch] = useState(false)
  const [passNotMatch, setPassNotMatch] = useState(false)
  const [signUpSuccessful, setSignUpSuccessful] = useState(false)
  const [accountNotExist, setAccountNotExist] = useState(false)
  let users = JSON.parse(localStorage.getItem("users")) 

  function handleAccChange(e) {
    users.find(user => {
      if(user.accNum == e.target.value) {
        setUserExists(true)
        setAccessingUser(e.target.value)
      }
    })
  }

  function handleEmailChange(e) {
    setUserEmail(e.target.value)
  }

  function handleUsernameChange(e) {
    setUserUsername(e.target.value)
  }

  function handlePasswordChange(e) {
    setUserPassword(e.target.value)
  }

  function handleConfirmPassword(e) {
    if(userPassword === e.target.value){
      setPassMatch(true)
    } else {
      setPassMatch(false)
    }
  }
  
  
  function handleSubmit(e) {
    e.preventDefault()
    if(passMatch === false) {
      setPassNotMatch(true)
      return
    }
    if(userExists === true) {
      users.find(user => {
        if(user.accNum === accessingUser) {
          let newInfo = {
            email: userEmail,
            username: userUsername,
            password: userPassword
          }
          Object.assign(user, newInfo)
          localStorage.setItem("users", JSON.stringify(users))          
          setSignUpSuccessful(true)
        }
      })
    } else {
      setAccountNotExist(true)
    }
    e.target.reset()
    resetState()
  }

  function resetState() {
    setAccessingUser('')
    setUserEmail('')
    setUserUsername('')
    setUserPassword('')
    setUserExists(false)
    setPassMatch(false)
  }

  return (
    <div className={displayState}>
      <div className="form-wrapper">
        <div className="left-wrapper">
          <p className="left-wrapper-text">
          <span className='bold-left-text'>Create an Account</span>
          <br></br>
          and start saving today!
          </p>
          <img src={leftimg} className="modalIcon"></img>
        </div>
        <div className="right-wrapper">
          <button id="close-sign-up" onClick={closeState}>X</button>
          <form id="form1" onSubmit={handleSubmit}>
            <div className="email-and-accountNumber">
              <div className="email-and-accountNumber-label">
                <label htmlFor="account-number" className="account-number-label">Account No.</label>
                <label htmlFor="email" className="email-label">Email</label>
              </div>
              <input onChange={handleAccChange} type="text" id="account-number" placeholder="Enter your account number here" required></input>
              <input onChange={handleEmailChange} type="email" id="email" placeholder="Enter email here" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" required></input>
            </div>  
            <div className="username-password">
              <div className="username-password-label">
              <label htmlFor="username" className="username-label">Username</label>         
              <label htmlFor="password" className="password-label">Password</label>         
              </div>
              <input onChange={handleUsernameChange} type="text" id="username" placeholder="Enter username" required></input>
              <input onChange={handlePasswordChange} type="password" id="password" placeholder="Password (8 or more characters)" required minLength={8}></input>
            </div> 
            <input onChange={handleConfirmPassword} type="password" id="confirm-password" placeholder="Confirm Password" required minLength={8}></input>
            <span>{passMatch ? "Passwords match! ✔️" : "Passwords does not match. ❌"}</span>
            <input type="submit" id="submitBtn"></input>
          </form>
          <p className="disclaimer">By submitting this form, you agree to the Terms of Use and Privacy of this website.</p>
        </div>
      </div>
      <PasswordNotMatch 
        displayState={passNotMatch ? "alert-modal-wrapper show" : "alert-modal-wrapper"}
        closeState={()=> passNotMatch ? setPassNotMatch(false) : setPassNotMatch(true)}
      />
      <SignUpSuccessful 
        displayState={signUpSuccessful ? "alert-modal-wrapper show" : "alert-modal-wrapper"}
        closeState={()=> signUpSuccessful ? setSignUpSuccessful(false) : setSignUpSuccessful(true)}
      />
      <AccountNotExist 
        displayState={accountNotExist ? "alert-modal-wrapper show" : "alert-modal-wrapper"}
        closeState={()=> accountNotExist ? setAccountNotExist(false) : setAccountNotExist(true)}
      />
    </div>
  )
}
