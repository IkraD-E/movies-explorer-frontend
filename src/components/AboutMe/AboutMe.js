import React from "react";
import studentImage from "../../images/student__image.jpg"

import "./AboutMe.css"

function AboutMe() {
  return (
    <div className="about-me__main">
      <div className="about-me__text-container">
        <div className="about-me__text-part">
          <h3 className="about-me__header">Ikra:D</h3>
          <p className="about-me__sub-text">
            Фронтенд-разработчик, 21 год
          </p>
          <p className="about-me__text">
            Живу в Иркутске, закончил ВГИК. Холост, DJ, VJ, Светооператор, Видеооператор, 
            а теперь ещё Фронтенд-разработчик. 
          </p>
        </div>
        <a target="_blank" rel="noopener noreferrer" href="https://github.com/IkraD-E" type="button" className="link about-me__link">
          Github
        </a>
      </div>
      <img className="about-me__image" src={studentImage} alt="Фотография Ikra:D"/>
    </div>
  );
}

export default AboutMe;