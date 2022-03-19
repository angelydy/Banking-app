import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './../css/index.css';
import { UnamePassIncorrect } from './AlertModals';

export default function LogInModal({ displayState, closeState }) {
  const [usernameInput, setUsernameInput] = useState('');
  const [path, setPath] = useState('');
  const [userExists, setUserExists] = useState(false)
  const [accessingUser, setAccessingUser] = useState('')
  const [unamePassIncorrect, setUnamePassIncorrect] = useState(false)
  const users = JSON.parse(localStorage.getItem("users")) 

  function handleUsernameChange(e) {
    setUsernameInput(e.target.value)
  }

  function handlePasswordChange(e) {
    if(usernameInput == 'admin' && e.target.value == 'admin') {
      setPath('/admin');
      setUserExists(true)
      setAccessingUser('admin')
    }
    users.find(user => {
      if(user.password == e.target.value && user.username == usernameInput) {
        setPath('/user')
        setAccessingUser(user.accNum)
        setUserExists(true)
      }
    })    
  }

  function handleClick() {
    if(userExists == true) {
      localStorage.setItem("loggedUser", JSON.stringify(accessingUser))
    } else {
      setUnamePassIncorrect(true)
    }
    resetState()
  }

  function resetState() {
    setUserExists(false)
    setPath('')
    setUsernameInput('')
  }

  return (
    <div className={displayState}>
      <div className="login-wrapper">
        <button id="close-sign-up" onClick={closeState}>X</button>
        <p className="wrapper-text">
          <span className='bold-login-text'>Welcome Back!</span>
          <br></br>
          Please enter your details.
        </p>
        <div className="form-container">
          <label htmlFor="login-username" className="username-label">Username</label>
          <input onChange={handleUsernameChange} type="text" id="login-username" placeholder="Enter username" required></input>
          <label htmlFor="login-password" className="password-label">Password</label>         
          <input onChange={handlePasswordChange} type="password" id="login-password" placeholder="Password (8 or more characters)" required minLength={8}></input>
          <div className="signInBtn">
            <Link 
              to={path}
              type="submit" 
              id="submitBtn"
              onClick={handleClick}
            >
              Sign In
            </Link>
          </div>
        </div>
      </div>
      <UnamePassIncorrect 
        displayState={unamePassIncorrect ? "alert-modal-wrapper show" : "alert-modal-wrapper"}
        closeState={()=> unamePassIncorrect ? setUnamePassIncorrect(false) : setUnamePassIncorrect(true)}
      />
    </div>
  );
}
