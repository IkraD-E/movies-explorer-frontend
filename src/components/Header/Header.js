import React from "react";
import { Link, useLocation } from 'react-router-dom';

import Navigation from "../Nav/Nav";

import logo from "../../images/header__logo.svg";

import "./Header.css";

function Header({navTabOpened, tuggleClickNavTab, handleCloseNavTab}) {
  const path = useLocation().pathname;
  return (
    (path === "/signup" || path === "/signin") ?
    (<header className="header header_auth">
      <Link className="header__logo-container" to="/">
        <img className="header__logo" src={logo} alt="Логотип"/>
      </Link>
    </header>) : (
      <header className={`${path === "/" ? "header" : "header header_white"}`}>
        <Link className="header__logo-container" to="/">
          <img className="header__logo" src={logo} alt="Логотип"/>
        </Link>
        <Navigation 
          path={path}
          navTabOpened={navTabOpened}
          tuggleClickNavTab={tuggleClickNavTab}
        />
      </header>) 
  )
}
export default Header;