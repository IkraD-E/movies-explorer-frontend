import React from "react";
import landingImage from "../../images/landing-logo.svg";


function Main() {
    return (
      <main className="content">
        <section className="landing">
          <div className="landing__main">
            <div className="landing__info">
              <h1 className="landing__header">
              Учебный проект студента факультета Веб-разработки.  
              </h1>
              <p className="landing__text">
                Листайте ниже, чтобы узнать больше про этот проект и его создателя.
              </p>
            </div>
            <img className="landing__picture" src={landingImage} alt="Логотип"/>
            <button className="landing__learn-more" type="button" onClick={""}>
              Узнать больше
            </button>
          </div>
        </section>
      </main>
    );
}

export default Main;