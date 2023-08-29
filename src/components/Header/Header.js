import React from "react";
import { useLocation } from 'react-router-dom';

import Navigation from "../Nav/Nav";

import logo from "../../images/header__logo.svg";

import "./Header.css";
import NavTab from "../NavTab/NavTab";
import NavMini from "../NavMini/NavMini";

function Header({navTabOpen, tuggleClickNavTab, handleCloseNavTab}) {
  const path = useLocation().pathname;
  return (
    (path === "/signup" || path === "/signin") ?
    (<div className="header header_auth">
      <img className="header__logo" src={logo} alt="Логотип"/>
    </div>)  : (
      <div className={`${path === "/" ? "header" : "header header_white"}`}>
        <img className="header__logo" src={logo} alt="Логотип"/>
        <Navigation path={path}/>
        <NavMini tuggleClickNavTab={tuggleClickNavTab} />
        <NavTab navTabOpen={navTabOpen} tuggleClickNavTab={tuggleClickNavTab}/>
      </div>) 
  )
}
export default Header;