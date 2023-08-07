import React from "react";
import { useLocation } from 'react-router-dom';

import Navigation from "../Navigation/Navigation";

import logo from "../../images/header__logo.svg";

import "./Header.css";

function Header() {
  const path = useLocation().pathname;
  return (
    <div className={`header ${(path === "/signup" || path === "/signin") && "header_auth"}`}>
      <img className="header__logo" src={logo} alt="Логотип"/>
      {path === "/signup" || path === "/signin" ? 
        "" : 
      (
        <Navigation path={path}/>
      )}
    </div>
  );
}
export default Header;