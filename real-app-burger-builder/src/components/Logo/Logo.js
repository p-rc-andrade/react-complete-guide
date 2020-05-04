import React from "react";
import burgerLogo from "../../assets/images/logo.png";
import "./Logo.css";

const Logo = (props) => (
  <div
    className="Logo"
    style={{ height: props.height, marginBottom: props.marginBottom }}
  >
    <img src={burgerLogo} alt="burgerLogo" />
  </div>
);

export default Logo;
