import React from "react";

import "./AboutProject.css"

function AboutProject() {
    return (
      <>
        <ul className="about__list">
          <li className="about__element">
            <h3 className="container__header">
              Дипломный проект включал 5 этапов
            </h3>
            <p className="container__text">
              Составление плана, работу над бэкендом, 
              вёрстку, добавление функциональности и финальные доработки.
            </p>
          </li>
          <li className="about__element">
            <h3 className="container__header">
              На выполнение диплома ушло 5 недель
            </h3>
            <p className="container__text">
              У каждого этапа был мягкий и жёсткий дедлайн, 
              которые нужно было соблюдать, чтобы успешно защититься.
            </p>
          </li>
        </ul>
        <ul className="elapsed-time__list">
          <li className="elapsed-time__element">
            <p className="elapsed-itme__text">
              1 неделя
            </p>
          </li>
          <li className="elapsed-time__element elapsed-time__element_long">
            <p className="elapsed-itme__text">
              4 недели
            </p>
          </li>
          <li className="elapsed-time__element">
            <p className="elapsed-itme__text">
              Back-end
            </p>
          </li>
          <li className="elapsed-time__element elapsed-time__element_long">
            <p className="elapsed-itme__text">
              Front-end
            </p>
          </li>
        </ul>
      </>
    );
}

export default AboutProject;