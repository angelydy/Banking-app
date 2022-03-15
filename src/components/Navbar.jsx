import React from "react";
import { Link } from "react-router-dom";
import logo from "./../assets/favicon.ico";
import './../css/index.css';

export default function Navbar() {

  function darkTheme(toggle) {
    document.getElementById('admin-main-container').style.background = (toggle) ? 'linear-gradient(90deg, rgba(14,13,31,1) 24%, rgba(31,43,59,1) 63%)' : "url('/src/assets/01.png')";
    document.querySelector('body').style.transition = (toggle) ? "all 0.5s ease-in-out" : "all 0.5s ease-in-out";
    document.getElementById('add-account-form').style.background = (toggle) ? 'linear-gradient(90deg, rgba(37,35,55,1) 24%, rgba(81,87,96,1) 63%)' : 'linear-gradient(to left bottom, #6e7cc4c5, #9296cdb2, #b2b1d7a9, #cfcee1bb, #ebebebc2)';
    document.getElementById('accounts-table-wrapper').style.background = (toggle) ? 'linear-gradient(90deg, rgba(54,60,91,1) 24%, rgba(48,54,62,1) 63%)' : 'linear-gradient(to left bottom, #91b2dcbb, #acbce0bb, #c2c7e3c2, #d5d4e6, #e4e2ea)';
    document.getElementById('withdraw-control-wrapper').style.background = (toggle) ? 'linear-gradient(90deg, rgba(67,72,94,1) 24%, rgba(41,66,99,1) 63%)' : 'linear-gradient(to left bottom, #6e9ac4c5, #96adceb6, #b7c0d8, #d4d5e1d0, #ebebebc5);';
    document.getElementById('deposit-control-wrapper').style.background = (toggle) ? 'linear-gradient(337deg, rgba(61,65,79,1) 24%, rgba(67,84,107,1) 63%)' : 'linear-gradient(to left bottom, #6e7cc4c5, #9296cdb2, #b2b1d7a9, #cfcee1bb, #ebebebc2)';
    document.getElementById('transfer-control-wrapper').style.background = (toggle) ? 'linear-gradient(337deg, rgba(61,60,111,1) 24%, rgba(21,40,64,1) 63%)' : 'linear-gradient(to left bottom, #91b2dcbb, #acbce0bb, #c2c7e3c2, #d5d4e6, #e4e2ea)';
  }

  return (
    <nav>
      <img src={logo} className="logo" />
      <div className="mode-and-log-out">
        <i className="fa-solid fa-moon" id="moonBtn" onClick={darkTheme} ></i>
        <Link
          to='/'
        >
          <i className="fa-solid fa-arrow-right-from-bracket"></i>
        </Link>
      </div>
    </nav>
  )
}