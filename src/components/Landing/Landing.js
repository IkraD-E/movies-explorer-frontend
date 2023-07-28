import React from "react";
import landingImage from "../../images/landing-logo.svg";
import "./Landing.css"


function Landing() {
    return (
      <main className="landing">
        <section className="section section_grey">
          <div className="landing__main">
            <div className="landing__info">
              <h1 className="landing__header">
              Учебный проект студента факультета Веб-разработки.  
              </h1>
              <p className="landing__text">
                Листайте ниже, чтобы узнать больше про этот проект и его создателя.
              </p>
              <button className="landing__btn" type="button" onClick={""}>
                Узнать больше
              </button>
            </div>
            <img className="landing__picture" src={landingImage} alt="Логотип"/>
          </div>
        </section>
        <section className="section" id="about">
          <div className="about__container_header">
            <h2 className="about__header">
              О проекте
            </h2>
          </div>
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
        </section>
      </main>
    );
}

export default Landing;