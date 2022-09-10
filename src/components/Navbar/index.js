import React, { useState } from "react";
import "./Navbar.css";
import { useNavigate } from "react-router-dom";

import twitter from "../../images/twitter.png";
import etherscan from "../../images/etherscan.png";
import opensea from "../../images/opensea.png";
import logo from "../../images/logofull.png";
const Navbar = () => {
  let navigate = useNavigate();

  return (
    <div className="NBSuper">
      <div className="NBContainer">
        <div
          className="Logo"
          onClick={() => {
            navigate("/");
          }}
        >
          <img src={logo} />
        </div>
        <div className="NSocials">
          <div className="NavLink">
            <a href="/" target="_blank">
              <img src={twitter} />
            </a>
          </div>
          <div className="NavLink">
            <a href="/" target="_blank">
              <img src={etherscan} />
            </a>
          </div>
          <div className="NavLink">
            <a href="/" target="_blank">
              <img src={opensea} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
