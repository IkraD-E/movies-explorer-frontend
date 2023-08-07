import React from "react";
import portfolioImage from "../../images/portfolio__image.svg"

import "./Portfolio.css"

function Portfolio() {
    return (
    <>
      <h2 className="portfolio-list__header">Портфолио</h2>
      <ul className="portfolio-list">
        <li className="portfolio-list__element">
          <h3 className="portfolio-list__title">Статичный сайт</h3>
          <img className="portfolio-list__link-image" src={portfolioImage} alt="Перейти на страницу"/>
        </li>
        <li className="portfolio-list__element">
          <h3 className="portfolio-list__title">Адаптивный сайт</h3>
          <img className="portfolio-list__link-image" src={portfolioImage} alt="Перейти на страницу"/>
        </li>
        <li className="portfolio-list__element">
          <h3 className="portfolio-list__title">Одностраничное приложение</h3>
          <img className="portfolio-list__link-image" src={portfolioImage} alt="Перейти на страницу"/>
        </li>
      </ul>
    </>
      );
}

export default Portfolio;