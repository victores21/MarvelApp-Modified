import React from "react";
import logo from "../../images/marvel-logo.png";
import "./Navbar.css";

const Navbar = ({ handleKeyUp }) => {
  return (
    <>
      <div className="navbar">
        <div className="logo">
          <a href="/">
            <img src={logo} alt="" />
          </a>
        </div>
        <div className="search_bar">
          <input
            type="text"
            name="search"
            id="search"
            placeholder="Search"
            onKeyUp={event => handleKeyUp(event)}
          />
        </div>
      </div>
      ;
    </>
  );
};

export default Navbar;
