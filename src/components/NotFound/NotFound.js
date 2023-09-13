import React from "react";
import { useNavigate } from 'react-router-dom';

import "./NotFound.css"

function NotFound() {
  const navigate = useNavigate();

  function getBack(){
    navigate(-1);
  }
  return (
    <main className="not-found">
      <section className="not-found__section">
        <h1 className="not-found__header">404</h1>
        <p className="not-found__text">Страница не найдена</p>
        <p className="not-found__link" onClick={getBack}>
          Назад
        </p>
      </section>
    </main>
  );
}
export default NotFound;