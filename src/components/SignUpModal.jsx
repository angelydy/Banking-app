import React, { useRef } from 'react';
import './../css/index.css';
import leftimg from './../assets/business-woman.png';

export default function SignUpModal(props) {
  const { displayState, closeState } = props;

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
          <form action="/user" id="form1" method="get">
            <label htmlFor="fullname" className="fullname-label">Name</label>
            <div className="name-container">
              <input type="name" id="first-name" placeholder="First Name" required></input>
              <input type="name" id="last-name" placeholder="Last Name" required></input>
            </div>
            <div className="email-and-accountNumber">
              <div className="email-and-accountNumber-label">
              <label htmlFor="email" className="email-label">Email</label>
              <label htmlFor="account-number" className="account-number-label">Account No.</label>
              </div>
              <input type="email" id="email" placeholder="Enter email here" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" required></input>
              <input type="number" id="account-number" placeholder="Enter your account number here" required></input>
            </div>  
            <div className="username-password">
              <div className="username-password-label">
              <label htmlFor="username" className="username-label">Username</label>         
              <label htmlFor="password" className="password-label">Password</label>         
              </div>
              <input type="text" id="username" placeholder="Enter username" required></input>
              <input type="password" id="password" placeholder="Password (8 or more characters)" required minLength={8}></input>
            </div> 
            <input type="password" id="confirm-password" placeholder="Confirm Password" required minLength={8}></input>
            <input type="submit" id="submitBtn"></input>
          </form>
          <p className="disclaimer">By submitting this form, you agree to the Terms of Use and Privacy of this website.</p>
        </div>
      </div>
    </div>
  )
}
