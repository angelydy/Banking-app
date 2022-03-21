import React,  { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "./../assets/favicon.ico";
import './../css/index.css';

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(false)
  useEffect(() => {
    const json = localStorage.getItem("site-dark-mode");
    const currentMode = JSON.parse(json);
    currentMode ? setDarkMode(true) : setDarkMode(false)
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("darkMode");
      document.getElementById("modeCheckbox").checked = true;
    } else {
      document.body.classList.remove("darkMode");
      document.getElementById("modeCheckbox").checked = false;
    }
    const json = JSON.stringify(darkMode);
    localStorage.setItem("site-dark-mode", json);
  }, [darkMode]);

  return (
    <nav>
      <img src={logo} className="logo" />
      <div className="mode-and-log-out">
        <label htmlFor="" className="darkModeLabel">
          <input type="checkbox" id="modeCheckbox"/>
          <div className="switchIcon" onClick={() => setDarkMode(!darkMode)}>
            <div className="icon-container">
              <i class="fa-solid fa-circle-half-stroke"></i>
            </div>
          </div>
        </label>
        <Link
          to='/'
        >
          <i className="fa-solid fa-arrow-right-from-bracket" id="log-out"></i>
        </Link>
      </div>
    </nav>
  )
}