import React from "react";
import landingImage from "../../images/landing-logo.svg";
import "./Landing.css"

import Footer from "../Footer/Footer";
import AboutProject from "../AboutProject/AboutProject";
import LandingSection from "../LandingSection/LandingSection";
import Techs from "../Techs/Techs";
import AboutMe from "../AboutMe/AboutMe";
import Portfolio from "../Portfolio/Portfolio";

function Landing({children}) {
    return (
      <>
        {children}
        <main className="landing">
          <section className="section landing">
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
          <LandingSection headerText={"О проекте"}>
            <AboutProject/>
          </LandingSection>
          <LandingSection headerText={"Технологии"}>
            <Techs/>
          </LandingSection>
          <LandingSection headerText={"Студент"}>
            <AboutMe/>
            <Portfolio/>
          </LandingSection>
        </main>
        <Footer/>
      </>
    );
}

export default Landing;