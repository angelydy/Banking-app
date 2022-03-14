import React from "react";
import { Link } from "react-router-dom";
import logo from "./../assets/favicon.ico";
import './../css/index.css';
import { useState } from "react";

export default function Navbar() {
  const [pageTheme, setPageTheme] = useState(false)
  const themeBtn = () => {
    pageTheme ? setPageTheme(false) : setPageTheme(true)
  };

  return (
    <nav>
      <img src={logo} className="logo" />
      <div className="mode-and-log-out">
        <i className="fa-solid fa-moon" onClick={themeBtn} ></i>
        <Link
          to='/'
        >
          <i className="fa-solid fa-arrow-right-from-bracket"></i>
        </Link>
      </div>
    </nav>
  )
}