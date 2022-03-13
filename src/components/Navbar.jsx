import React from "react";
import { Link } from "react-router-dom";
import logo from "./../assets/favicon.ico";
import './../css/index.css';

export default function Navbar() {
  return (
    <nav>
      <img src={logo} className="logo" />
      <div className="mode-and-log-out">
        <i class="fa-solid fa-moon"></i>
        <i class="fa-solid fa-arrow-right-from-bracket" onClick={<Link to={('/')}></Link>}></i>
      </div>
    </nav>
  )
}