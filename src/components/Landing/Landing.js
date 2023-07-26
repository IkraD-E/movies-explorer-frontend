import React from "react";
import landingImage from "../../images/landing-logo.svg";
import "./Landing.css"


function Landing() {
    return (
      <main className="landing">
        <section className="landing">
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
      </main>
    );
}

export default Landing;