import React from "react";
import { NavLink } from 'react-router-dom';

import "./Navigation.css"

function Navigation({ path }) {

  return (
    path === "/" ? (<nav className="nav">
      <NavLink to="/signup" className='nav__link'>
        Регистрация
      </NavLink>
      <NavLink to="/signin" className='nav__btn'>
        Войти
      </NavLink>
    </nav>) : (
      <nav className="nav">
        <NavLink to="/signup" className='nav__link'>
          sdfasdf
        </NavLink>
        <NavLink to="/signin" className='nav__btn'>
          asdfasdfdas
        </NavLink>
      </nav>
    )
  );
}

export default Navigation;