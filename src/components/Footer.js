import React from "react";

const Footer = () => {
  return (
    <footer className="container">
      <div
        style={{
          display: "flex",
          paddingTop: "73px",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div>
            <img src="./assets/logo.jpg" />
          </div>
        </div>
        <div>
          <h6>ADDRESS</h6>
          <ul style={{ marginRight: "88px" }}>
            <li>Edible Kitchen Services</li>
            <li>JN Stadium, Kaloor</li>
            <li>Kochi - 6806644</li>
          </ul>
        </div>
        <div>
          <h6>PHONE</h6>
          <ul style={{ marginRight: "88px" }}>
            <li>0124 398 6371</li>
          </ul>
        </div>
        <div>
          <h6>QUICK LINKS</h6>
          <ul style={{ marginRight: "97px" }}>
            <li>My Account</li>
            <li>About Us</li>
            <li>Keto Plans</li>
            <li>Our Dishes</li>
          </ul>
        </div>
        <div>
          <h6>FOLLOW US</h6>
          <ul>
            <li>
              <img src="./assets/043-facebook-1.svg" />
              <img src="./assets/007-whatsapp.svg" />
              <img src="./assets/013-twitter-1.svg" />
              <img src="./assets/034-instagram.svg" />
              <img src="./assets/002-youtube.svg" />
            </li>
          </ul>
        </div>
      </div>
      <p>Copyright 2020-2021 Edibles - All Rights Reserved</p>
    </footer>
  );
};

export default Footer;
