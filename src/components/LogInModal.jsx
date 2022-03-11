import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './../css/index.css';

export default function LogInModal(props) {
  const { displayState, closeState } = props;
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [path, setPath] = useState('/user');

  function handleUsernameChange(e) {
    setUsername(e.target.value);
    if(username == 'admin' && password == 'admin') {
      setPath('/admin');
    }
  }

  function handlePasswordChange(e) {
    setPassword(e.target.value);
    if(username == 'admin' && password == 'admin') {
      setPath('/admin');
    }
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
          <input onKeyUp={handleUsernameChange} type="text" id="login-username" placeholder="Enter username" required></input>
          <label htmlFor="login-password" className="password-label">Password</label>         
          <input onKeyUp={handlePasswordChange} type="password" id="login-password" placeholder="Password (8 or more characters)" required minLength={8}></input>
          <div className="signInBtn">
            <Link 
              to={path}
              type="submit" 
              id="submitBtn"
            >
              Sign In
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
