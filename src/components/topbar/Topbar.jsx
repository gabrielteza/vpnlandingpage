import React from "react";
import "./topbar.css";
import Logo from "./Logo.png"; // Correct the path if necessary

export default function Topbar() {
  return (
    <div>
      <nav>
        <div className="topBar">
          <div className="topWrapper">
            <div className="topLeft">
              <img src={Logo} alt="Logo" className="imgLogo" />
            </div>
            <ul className="topMid">
                <li>About</li>
                <li>Features</li>
                <li>Pricing</li>
                <li>Testimonials</li>
                <li>Help</li>
            </ul>
            <div className="topRight">
              <button className="btnSignin">Sign In</button>
              <button className="btnSignUp">Sign Up</button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
