import React from "react";
import portfolioImage from "../../images/portfolio__image.svg"

import "./Portfolio.css"

function Portfolio() {
    return (
    <>
      <ul className="portfolio-list">
        <h2 className="portfolio-list__header">Портфолио</h2>
        <li className="portfolio-list__element">
          <a target="_blank" rel="noopener noreferrer" className="portfolio-list__link" href="https://ikrad-e.github.io/how-to-learn/">
            <h3 className="portfolio-list__title">Статичный сайт</h3>
            <img className="portfolio-list__link-image" src={portfolioImage} alt="Перейти на страницу"/>
          </a>
        </li>
        <li className="portfolio-list__element">
          <a target="_blank" rel="noopener noreferrer" className="portfolio-list__link" href="https://ikrad-e.github.io/russian-travel/">
            <h3 className="portfolio-list__title">Адаптивный сайт</h3>
            <img className="portfolio-list__link-image" src={portfolioImage} alt="Перейти на страницу"/>
          </a>
        </li>
        <li className="portfolio-list__element">
          <a target="_blank" rel="noopener noreferrer" className="portfolio-list__link" href="https://github.com/IkraD-E/react-mesto-api-full-gha">
            <h3 className="portfolio-list__title">Одностраничное приложение</h3>
            <img className="portfolio-list__link-image" src={portfolioImage} alt="Перейти на страницу"/>
          </a>
        </li>
      </ul>
    </>
      );
}

export default Portfolio;