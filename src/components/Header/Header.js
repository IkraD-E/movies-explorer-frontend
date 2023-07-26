import React from "react";

import logo from "../../images/header__logo.svg";

import "./Header.css";

function Header() {
    return (
      <div className="header">
        <img className="header__logo" src={logo} alt="Логотип"/>
        <div className="header__nav">
          <button className="header__link" type="button" onClick={""}>Регистрация</button>
          <button className="header__link header__link_blue" type="button" onClick={""}>Войти</button>
        </div>
      </div>
    );
}
export default Header;