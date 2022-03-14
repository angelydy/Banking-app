import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "./../assets/favicon.ico";
import './../css/index.css';

export default function Navbar() {
  const [path, setPath] = useState('/')

  return (
    <nav>
      <img src={logo} className="logo" />
      <div className="mode-and-log-out">
        <i className="fa-solid fa-moon"></i>
        <Link
          to={path}
        >
          <i className="fa-solid fa-arrow-right-from-bracket"></i>
        </Link>
      </div>
    </nav>
  )
}