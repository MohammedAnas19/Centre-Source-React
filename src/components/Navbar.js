import React from "react";
function navbar() {
  return (
    <div className="navbar container">
      <div>
        <ul>
          <li>HOME</li>
          <li>ABOUT US</li>
          <li>DIET PLANS</li>
          <li className="btn" style={{ width: "164px", color: "white" }}>
            SELECT YOUR PLAN
          </li>
        </ul>
        <div className="logo"></div>
      </div>
      <div>
        <ul className="acc">
          <li>Sign In</li>
          <li className="btn" style={{ width: "102px", color: "white" }}>
            Register
          </li>
        </ul>
      </div>
    </div>
  );
}

export default navbar;
