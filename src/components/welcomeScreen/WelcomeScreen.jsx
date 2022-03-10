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
            <p>
              <span className='boldtext'>Create an Account</span>
              <br></br>
              and start saving today!
            </p>
            <img src={leftimg} className="modalIcon"></img>
          </div>
          <div className="right-wrapper">
          <button id="close-sign-up">X</button>
          <form action="results.html" id="form1" method="get">
            <label for="name" class="name-label">First Name</label>
            <input type="name" id="name" placeholder="Ex. Lance Pallarca" required></input>
            <label for="name" class="name-label">Last Name</label>
            <input type="name" id="name" placeholder="Ex. Lance Pallarca" required></input>
            <label for="email" class="email-label">Email</label>
            <input type="email" id="email" placeholder="sy.feydaniel@gmail.com" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" required></input>
            <input type="submit" value="Sign Up" id="submit"></input>
          </form>
          <div class="disclaimer">By submitting this form, you agree to the Terms of Use and Privacy of this website.</div>
        </div></div>
      </div>
    </div>
  );
}

export default WelcomeScreen;