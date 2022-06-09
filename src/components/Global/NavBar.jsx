import { useNavigate } from "react-router-dom";
import React, { useRef } from "react";
import "./NavBar.css";

const NavBar = ({ oElements }) => {
  const oHamburgerMenu = useRef(null);
  const fnNavigate = useNavigate();

  const fnToggleMobileMenu = (event) => {
    event.preventDefault();
    oHamburgerMenu.current.classList.toggle("open");
  };
  const fnOnClick = (event) => {
    event.preventDefault();
    fnNavigate("/log");
  };

  return (
    <header className="navbar">
      <h2 className="brand">{oElements.oHeader.sText}</h2>
      <button className="btn log-btn" onClick={fnOnClick}>
        Log
      </button>
      <div
        className="hamburger-icon"
        ref={oHamburgerMenu}
        onClick={fnToggleMobileMenu}
      >
        <div className="hamburger-bar-1"></div>
        <div className="hamburger-bar-2"></div>
        <div className="hamburger-bar-3"></div>
        <ul className="mobile-menu">
          {oElements.aNavBtns.map((oElement) => (
            <a href={oElement.sId} className="nav-link" key={oElement.sId}>
              {oElement.sText}
            </a>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default NavBar;
