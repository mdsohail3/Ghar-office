import React from 'react'
import header from "./header.css"
import logo from "../images/logo.png";


const Header = () => {
  return (
    <div id="navbar">
      <span>
        <img src={logo} width={"50px"} />

        <h3>Sneaker Mart</h3>
      </span>
    </div>
  );
}

export default Header