import React from "react";
import { Link, useLocation } from 'react-router-dom';

import Navigation from "../Navigation/Navigation";

import logo from "../../images/header__logo.svg";

import "./Header.css";
import NavMini from "../NavMini/NavMini";

function Header({isLoggedIn}) {
  const path = useLocation().pathname;
  const [navTabOpen, setNavTab] = React.useState(false);
  function tuggleClickNavTab() {
    setNavTab(!navTabOpen);
  }

  return (
    <header className={`header ${path === "/" ? "" : "header_white"} ${(path === "/signup" || path === "/signin") ? "header_auth" : "" }`}>
      <Link className="header__logo-container" to="/">
        <img className="header__logo" src={logo} alt="Логотип"/>
      </Link>
      {(path === "/signup" || path === "/signin") ? "" : <NavMini tuggleClickNavTab={tuggleClickNavTab} />}
      <Navigation 
        path={path}
        navTabOpen={navTabOpen}
        tuggleClickNavTab={tuggleClickNavTab}
        isLoggedIn={isLoggedIn}
      />
    </header>
    // (path === "/signup" || path === "/signin") ?
    // (<header className="header header_auth">
    //   <Link className="header__logo-container" to="/">
    //     <img className="header__logo" src={logo} alt="Логотип"/>
    //   </Link>
    // </header>) : (
    //   <header className={`header ${path === "/" ? "" : "header_white"}`}>
    //     <Link className="header__logo-container" to="/">
    //       <img className="header__logo" src={logo} alt="Логотип"/>
    //     </Link>
    //     {path === "/" ? "" : <NavMini tuggleClickNavTab={tuggleClickNavTab} />}
    //     <Navigation 
    //       path={path}
    //       navTabOpen={navTabOpen}
    //       tuggleClickNavTab={tuggleClickNavTab}
    //     />
    //   </header>) 
  )
}
export default Header;