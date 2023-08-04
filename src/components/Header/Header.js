import React from "react";
import { NavLink } from 'react-router-dom';

import logo from "../../images/header__logo.svg";

import "./Header.css";

function Header() {
  return (
    <div className="header">
      <img className="header__logo" src={logo} alt="Логотип"/>
      <div className="header__nav">
        <NavLink to="/signup" className='header__link'>
          Регистрация
        </NavLink>
        <NavLink to="/signin" className='header__btn'>
          Войти
        </NavLink>
      </div>
    </div>
  );
}
export default Header;