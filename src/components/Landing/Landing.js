import React from "react";
import landingImage from "../../images/landing-logo.svg";
import "./Landing.css"
import studentImage from "../../images/student__image.jpg"
import studentListImage from "../../images/student-list__link-image.svg"

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
          <div className="section__container-header">
            <h2 className="section__header">
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
        <section className="section" id="tech">
          <div className="section__container-header">
            <h2 className="section__header">
              Технологии
            </h2>
          </div>
          <div className="tech__main">
            <h2 className="tech__header">7 технологий</h2>
            <p className="tech__text">
              На курсе веб-разработки мы освоили технологии, 
              которые применили в дипломном проекте.
            </p>
            <ul className="tech-list">
              <li className="tech-list__element">HTML</li>
              <li className="tech-list__element">CSS</li>
              <li className="tech-list__element">JS</li>
              <li className="tech-list__element">React</li>
              <li className="tech-list__element">Git</li>
              <li className="tech-list__element">Express.js</li>
              <li className="tech-list__element">mongoDB</li>
            </ul>
          </div>
        </section>
        <section className="section" id="student">
          <div className="section__container-header">
            <h2 className="section__header">
              Студент
            </h2>
          </div>
          <div className="student__main">
            <div className="student__text-part">
              <h2 className="student__header">Ikra:D</h2>
              <p className="student__sub-text">
                Фронтенд-разработчик, 21 год
              </p>
              <p className="student__text">
                Живу в Иркутске, закончил ВГИК. Холост, DJ, VJ, Светооператор, Видеооператор, 
                а теперь ещё Фронтенд-разработчик. 
              </p>
              <a href="https://github.com/IkraD-E" type="button" className="link student__link">
                Github
              </a>
            </div>
            <img className="student__image" src={studentImage} alt="Фотография Ikra:D"/>
          </div>
          <h2 className="student-list__header">Портфолио</h2>
          <ul className="student-list">
            <li className="student-list__element">
              <h3 className="student-list__title">Статичный сайт</h3>
              <img className="student-list__link-image" src={studentListImage} alt="Перейти на страницу"/>
            </li>
            <li className="student-list__element">
              <h3 className="student-list__title">Адаптивный сайт</h3>
              <img className="student-list__link-image" src={studentListImage} alt="Перейти на страницу"/>
            </li>
            <li className="student-list__element">
              <h3 className="student-list__title">Одностраничное приложение</h3>
              <img className="student-list__link-image" src={studentListImage} alt="Перейти на страницу"/>
            </li>
          </ul>
        </section>
      </main>
    );
}

export default Landing;