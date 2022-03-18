import React,  { useState } from "react";
import { Link } from "react-router-dom";
import logo from "./../assets/favicon.ico";
import './../css/index.css';

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(false)
  React.useEffect(() => {
    const json = localStorage.getItem("site-dark-mode");
    const currentMode = JSON.parse(json);
    currentMode ? setDarkMode(true) : setDarkMode(false)
  }, []);

  React.useEffect(() => {
    if (darkMode) {
      document.body.classList.add("darkMode");
    } else {
      document.body.classList.remove("darkMode");
    }
    const json = JSON.stringify(darkMode);
    localStorage.setItem("site-dark-mode", json);
  }, [darkMode]);

  return (
    <nav>
      <img src={logo} className="logo" />
      <div className="mode-and-log-out">
        <i class="fa-solid fa-circle-half-stroke" onClick={() => setDarkMode(!darkMode)}></i>
        <Link
          to='/'
        >
          <i className="fa-solid fa-arrow-right-from-bracket"></i>
        </Link>
      </div>
    </nav>
  )
}