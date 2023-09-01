import React from "react";
import { NavLink } from "react-router-dom";

import navLinkImage from "../../images/nav__link-image.svg"


import "./NavTab.css"

function NavTab({navTabOpen, tuggleClickNavTab}) {
  return (
    <div className={`nav-tab__underlayer ${navTabOpen && "nav-tab__underlayer_true"}`}>
      <nav className={`nav-tab ${navTabOpen && "nav-tab_true"}`}>
        <div className="nav-tab__link-container">
          <button className="nav-tab__close-btn" type="button" onClick={tuggleClickNavTab}/>
          <ul className="nav-tab__list">
            <NavLink to="/" className='nav-tab__link' onClick={tuggleClickNavTab}>
              Главная
            </NavLink>
            <NavLink to="/movies" className='nav-tab__link nav-tab__link_underline' onClick={tuggleClickNavTab}>
              Фильмы
            </NavLink>
            <NavLink to="/saved-movies" className='nav-tab__link' onClick={tuggleClickNavTab}>
              Сохранённые фильмы
            </NavLink>
          </ul>
        </div>
        {console.log(navTabOpen)}
        <NavLink to="/profile" className='nav-tab__container' onClick={tuggleClickNavTab}>
          <img className="nav-tab__link-image" src={navLinkImage} alt="Логотип"/>
          <p className="nav-tab__link-text">
            Аккаунт
          </p>
        </NavLink>
      </nav>
    </div>
  );
}

export default NavTab;