import React from "react";

import logo from "../../images/header__logo.svg";

import "./Header.css";

function Header() {
    return (
      <div className="header">
        <img className="header__logo" src={logo} alt="Логотип"/>
        <div className="header__nav">
          <a className="header__link" href="/" type="button" onClick={""}>Регистрация</a>
          <button className="header__btn" type="button" onClick={""}>Войти</button>
        </div>
      </div>
    );
}
export default Header;