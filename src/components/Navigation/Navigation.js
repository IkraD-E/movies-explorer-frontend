import React from "react";
import { NavLink } from 'react-router-dom';

import navLinkImage from "../../images/nav__link-image.svg"
import NavTab from "../NavTab/NavTab";

import "./Navigation.css"

function Navigation({ path, navTabOpen, tuggleClickNavTab, isLoggedIn }) {
  return (
    (path === "/signup" || path === "/signin") ? "" :
    (isLoggedIn ? (
      <>
        <nav className="nav">
          <NavLink to="/movies" className={`nav__link ${path==="/movies" ? 'nav__link_bold' : ""}`}>
            Фильмы
          </NavLink>
          <NavLink to="/saved-movies" className={`nav__link ${path==="/saved-movies" ? 'nav__link_bold' : ""}`}>
            Сохранённые фильмы
          </NavLink>
          <NavLink to="/profile" className='nav__container'>
            <img className="nav__link-image" src={navLinkImage} alt="Логотип"/>
            <p className="nav__link-text">
              Аккаунт
            </p>
          </NavLink>
        </nav>
        <NavTab navTabOpen={navTabOpen} tuggleClickNavTab={tuggleClickNavTab}/>
      </>
    ) : (<nav className="nav nav_main">
    <NavLink to="/signup" className='nav__link nav__link_bold'>
      Регистрация
    </NavLink>
    <NavLink to="/signin" className='nav__btn'>
      Войти
    </NavLink>
  </nav>))
  );
}

export default Navigation;