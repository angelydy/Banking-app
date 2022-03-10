import React from "react";
import pic from './../../assets/02.png';
import leftimg from './../../assets/business-woman.png';
import { useState } from "react";
import './WelcomeScreen.css';

function WelcomeScreen() {
  const [switchToggle, setSwitchToggle] = useState(false)

  const buttonClicked = () => {
    switchToggle ? setSwitchToggle(false) : setSwitchToggle(true)
  };

  return (
    <div className="welcome">
      <navbar>
        <p>
          LOGO
        </p>
        <div className='navright'>
          <a>
            About
          </a>
          <a>
            Blog
          </a>
            <button className="SignUp" onClick={buttonClicked}>
              Sign Up
            </button>
        </div>
      </navbar>

      <div className="WelcomeScreen-content">
        <div className='grid'>
          <div className='left'>
            <p>
              <span className='boldText'>
                It's never been simpler to make a payment
              </span><br></br>
              <br></br>
              <span className='desc'>
                Learn how to handle your finances in the most straightforward way possible.
                Deposits, withdrawals, and transfers are all possible.
                With NO LIMITS, you can send money all over the world!
              </span>
            </p>
            <div className='buttons'>
              <button className='LogIn'>
                Log in
              </button>
              <button className='downloadBtn'>
                Download App
              </button>
            </div>
          </div>
          <div className='right'>
            <img src={pic} alt='Glass Cards' className='cardsPhoto' />
          </div>
        </div>
      </div>

      <div className={switchToggle ? "show-sign-up-modal" : "sign-up-modal"}>
        <div class="form-wrapper">
          <div className="left-wrapper">
            <p className="left-wrapper-text">
              <span className='bold-left-text'>Create an<br></br> Account</span>
              <br></br>
              and start saving today!
            </p>
            <img src={leftimg} className="modalIcon"></img>
          </div>
          <div className="right-wrapper">
          <button id="close-sign-up" onClick={buttonClicked}>X</button>
          <form action="results.html" id="form1" method="get">
            <label for="fullname" class="fullname-label">Name</label>
            <div className="name-container">
              <input type="name" id="first-name" placeholder="First Name" required></input>
              <input type="name" id="last-name" placeholder="Last Name" required></input>
            </div>
            <div className="email-and-accountNumber">
              <div className="email-and-accountNumber-label">
                <label for="email" class="email-label">Email</label>
                <label for="account-number" class="account-number-label">Account No.</label>
              </div>
              <input type="email" id="email" placeholder="Enter email here" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" required></input>
              <input type="number" id="account-number" placeholder="Enter your account number here" required></input>
            </div>  
            <div className="username-password">
              <div className="username-password-label">
                <label for="password" class="password-label">Password</label>         
                <label for="username" class="username-label">Username</label>         
              </div>
              <input type="password" id="password" placeholder="Password (8 or more characters)" required minLength={8}></input>
              <input type="text" id="password" placeholder="Enter username" required></input>
            </div> 
            <input type="password" id="confirm-password" placeholder="Confirm Password" required minLength={8}></input>
            <input type="submit" id="submitBtn"></input>
          </form>
          <p class="disclaimer">By submitting this form, you agree to the Terms of Use and Privacy of this website.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WelcomeScreen;