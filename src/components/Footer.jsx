import React from "react";
import './../css/index.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="l-footer">
        <h1>Noble Bank</h1>
        <p>All rights reserved by ©Noble Bank 2022 </p>
        <input className="newsletter" type="text" placeholder="Subscribe to newsletter"></input>
      </div>
      <ul className="r-footer">
        <li>
          <h2>Social</h2>
          <ul className="box">
            <li><a href="#">Facebook</a></li>
            <li><a href="#">Twitter</a></li>
          </ul>
        </li>
        <li className="features">
          <h2>Information</h2>
          <ul className="box h-box">
            <li><a href="#">Pricing</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Sales</a></li>
            <li><a href="#">Tickets</a></li>
            <li><a href="#">Certifications</a></li>
            <li><a href="#">Customer Service</a></li>
          </ul>
        </li>
        <li>
          <h2>Legal</h2>
          <ul className="box">
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms of Use</a></li>
            <li><a href="#">Contract</a></li>
          </ul>
        </li>
      </ul>
    </footer>
  )
}