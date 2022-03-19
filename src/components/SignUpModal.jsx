import React, { useState } from 'react';
import './../css/index.css';
import leftimg from './../assets/business-woman.png';
import AlertModals from './AlertModals';

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
      <AlertModals 
        displayState={passNotMatch ? "alert-modal-wrapper show" : "alert-modal-wrapper"}
        closeState={()=> passNotMatch ? setPassNotMatch(false) : setPassNotMatch(true)}
        boldAlert={'OOPS!'}
        message={"Sorry, passwords does not match."}
        image={"https://img.icons8.com/cotton/50/000000/error--v4.png"}
      />
      <AlertModals 
        displayState={signUpSuccessful ? "alert-modal-wrapper show" : "alert-modal-wrapper"}
        closeState={()=> signUpSuccessful ? setSignUpSuccessful(false) : setSignUpSuccessful(true)}
        boldAlert={'GREAT!'}
        message={"Successful sign up! You can now proceed to log in."}
        image={"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAADmklEQVRoge2ZTWgWRxjH/5Ok0RgkaUIRLVhoTTBGSUHjB6X21DbQWw8VWvSgnlRayUV6U3oWeqqIoF4EEb96a7WFNGLIRWhLiii2IJooIcZETOtH4q+HfZYsL8mb3dnZNxHyvzxk33n+83t2drKzM9KiFlWIXFHGwBpJWyS1SmqUNCVpRFK/pF7n3GRRfecWUA3sBgYorzvA9pB9BxsRYKWkC5K22aUhSdclDUq6Z9fekdSlaJT+k3RK0hnnXF8ojlwCGoFbdrdvA58BM94koAo4WjJCZ4FlleaeCe60Ad0AGlK0rwLWAQeBYcu9WAnWclCrgUngJdDhkf8uMGrFdBXBmBZkn0FcyOFxOH7EQrJlhbhkEHtyeLSZx98h2bJC9BvE1hwe1cAz4JXvpK/y7TyhZotjvgbOuSlJzxW9Dmp9PEIUEr+hyelTY/GVT3KIQoYtrvA1AJokLZM04Zx74uMRopAHFlfl8Gix+I+vQYhC/rSY+R2S0IcWr/sahCjkhsXNOTw+snjN1yBEIbFHJ1BTtuUMAmo1PSLjAXj8BPTYe+TQbAvFOfId8K15/FIEY1qQmwbhPUeADvP4y9cjxKM1YHFjDo9Oi96F5Bawy+7mXaDbI7/bcgF2FsGYFqQaOG/rpHEg9Sjbd8l4vHoGqotkTQv1uwG1Z8jZYDk38/YfYo7E+s3iVxlyvizJnX8BG+3ujgJvpWjfBDyynA8qwZhawGUD6wGay7RbDvxsba9WkjGVgLeBh3N9aAFrrc0Y8F6IvkPOETnnBhXtY6Xtd8Q5F+TzNmghpjRfePFH2JJQnRZRyFKLT8u0mbC4MAsBVkhaaX+WW8mOKxqVBmB1SIbcspfbHzaJf0rR/lz8MgQ2VYJxLqB24BjwwsBuE21oz5XXzPSu/SRwEni/EsxJiBrgc+BXW2MBTBHtATdm8FkOnLDcWNeAL4A3iixgKXCA6dUqwARwHFifw7cN+AF4mvC9D3wD1IUswBEd4AwmOhoAvgbeDNhPA7A/MdcAhoC9eHx9lprXAz8mjPupwK458DHQl+j3MlDva7YE6DWjEWBHYN40DDsTj1wv0WZFZpPvzeAe0FoAZ1qODcYAcDRrcgvR4c0UsKUgxiw8W43lBdGJcerE7+wOXCmQL5OAq8Z0pPS3ckuUTyxeKgbLS/E546elP8z6Lw14rOigfyHqsXOuKXlhtiPkOkn/VgTJX3XOuWfzDbGoRb0u+h/xDJ/HHlzXCgAAAABJRU5ErkJggg=="}
      />
      <AlertModals 
        displayState={accountNotExist ? "alert-modal-wrapper show" : "alert-modal-wrapper"}
        closeState={()=> accountNotExist ? setAccountNotExist(false) : setAccountNotExist(true)}
        boldAlert={'OOPS!'}
        message={"Sorry, this account does not exist."}
        image={"https://img.icons8.com/cotton/50/000000/error--v4.png"}
      />
    </div>
  )
}
