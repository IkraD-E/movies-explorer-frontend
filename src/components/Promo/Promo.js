import React from "react";
import { Link } from "react-router-dom";

import promoImage from "../../images/promo-logo.svg";

import "./Promo.css"

function Promo() {
  return (
    <section className="section section_promo">
      <div className="promo">
        <div className="promo__info">
          <h1 className="promo__header">
          Учебный проект студента факультета Веб-разработки.  
          </h1>
          <p className="promo__text">
            Листайте ниже, чтобы узнать больше про этот проект и его создателя.
          </p>
          <Link className="promo__link" to={"/signup"}>
            Узнать больше
          </Link>
        </div>
        <img className="promo__picture" src={promoImage} alt="Логотип"/>
      </div>
  </section>
  );
}

export default Promo;