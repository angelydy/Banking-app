import React, { useState } from "react";
import pic from './../assets/02.png';
import './../css/index.css';
import SignUpModal from "../components/SignUpModal";
import LogInModal from "../components/LogInModal";

function WelcomeScreen() {
  const [switchToggle, setSwitchToggle] = useState(false)
  const buttonClicked = () => {
    switchToggle ? setSwitchToggle(false) : setSwitchToggle(true)
  };

  const [loginModal, setLoginModal] = useState(false)
  const loginClicked = () => {
    loginModal ? setLoginModal(false) : setLoginModal(true)
  };

  return (
    <div className="welcome">
      <nav>
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
      </nav>

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
              <button className='LogIn' onClick={loginClicked} >
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

      <SignUpModal 
        displayState={switchToggle ? "show-sign-up-modal" : "sign-up-modal"} 
        closeState={buttonClicked}
      />
      <LogInModal 
        displayState={loginModal ? "show-login-modal" : "login-modal"}
        closeState={loginClicked}
      />
    </div>
  );
}
export default WelcomeScreen ;
