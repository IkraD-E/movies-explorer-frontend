import React from "react";
import { NavLink } from 'react-router-dom';

import "./NotFound.css"

function NotFound() {
  return (
    <main className="not-found">
      <h1 className="not-found__header">404</h1>
      <p className="not-found__text">Страница не найдена</p>
      <NavLink to="/" className="not-found__link">
        Назад
      </NavLink>
    </main>
  );
}
export default NotFound;