import React from "react";
import { Link, useLocation } from 'react-router-dom';

import Navigation from "../Nav/Nav";

import logo from "../../images/header__logo.svg";

import "./Header.css";
import NavMini from "../NavMini/NavMini";

function Header({navTabOpen, tuggleClickNavTab, handleCloseNavTab}) {
  const path = useLocation().pathname;
  return (
    (path === "/signup" || path === "/signin") ?
    (<header className="header header_auth">
      <Link className="header__logo-container" to="/">
        <img className="header__logo" src={logo} alt="Логотип"/>
      </Link>
    </header>) : (
      <header className={`header ${path === "/" ? "" : "header_white"}`}>
        <Link className="header__logo-container" to="/">
          <img className="header__logo" src={logo} alt="Логотип"/>
        </Link>
        {path === "/" ? "" : <NavMini tuggleClickNavTab={tuggleClickNavTab} />}
        <Navigation 
          path={path}
          navTabOpen={navTabOpen}
          tuggleClickNavTab={tuggleClickNavTab}
        />
      </header>) 
  )
}
export default Header;