import React from 'react'
 import logo from "../images/logo.png";
const Footer = () => {
  return (
    <div className="footer">
      @2022 Copyright
      <img src={logo} width={"50px"} />
      <a href="">All rights reserverd</a>
      <a href="#"> privacy policy</a>

      <a href="">Terms and conditions</a>
    </div>
  );
}

export default Footer