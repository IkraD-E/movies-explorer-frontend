import React from "react";
import { useLocation } from 'react-router-dom';

import Navigation from "../Navigation/Navigation";

import logo from "../../images/header__logo.svg";

import "./Header.css";

function Header() {
  const path = useLocation().pathname;
  return (
    (path === "/signup" || path === "/signin") ?
    (<div className="header header_auth">
      <img className="header__logo" src={logo} alt="Логотип"/>
    </div>)  : (
      <div className={`${path === "/" ? "header" : "header header_white"}`}>
        <img className="header__logo" src={logo} alt="Логотип"/>
        <Navigation path={path}/>
      </div>) 
  )
}
export default Header;