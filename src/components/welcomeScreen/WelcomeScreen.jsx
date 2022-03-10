import React from "react";
import pic from './../../assets/02.png';
import leftimg from './../../assets/business-woman.png';
import './WelcomeScreen.css';

function WelcomeScreen() {
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
          <button className='SignUp'>
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

      <div class="sign-up-modal">
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
          <button id="close-sign-up">X</button>
          <form action="results.html" id="form1" method="get">
            <label for="fullname" class="fullname-label">Name</label>
            <input type="name" id="first-name" placeholder="First Name" required></input>
            <input type="name" id="last-name" placeholder="last Name" required></input>
            <label for="email" class="email-label">Email</label>
            <input type="email" id="email" placeholder="sy.feydaniel@gmail.com" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" required></input>
            <label for="mobile-number" class="mobile-number-label">Phone Number</label>
            <input type="number" id="mobile-number" placeholder="Enter your mobile number here" required></input>
            <label for="password" class="password-label">Password</label>
            <input type="password" id="password" placeholder="Input a password" required></input>
            <input type="submit" id="submitBtn" placeholder="Submit"></input>
          </form>
          <div class="disclaimer">By submitting this form, you agree to the Terms of Use and Privacy of this website.</div>
        </div></div>
      </div>
    </div>
  );
}

export default WelcomeScreen;