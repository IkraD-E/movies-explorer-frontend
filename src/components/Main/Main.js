import React from "react";
import "./Main.css"

import Footer from "../Footer/Footer";
import AboutProject from "../AboutProject/AboutProject";
import LandingSection from "../LandingSection/LandingSection";
import Techs from "../Techs/Techs";
import AboutMe from "../AboutMe/AboutMe";
import Portfolio from "../Portfolio/Portfolio";
import Promo from "../Promo/Promo";

function Main({children}) {
    return (
      <>
        {children}
        <main className="main">
            <Promo/>
          <LandingSection headerText={"О проекте"} sectionName={"about"}>
            <AboutProject/>
          </LandingSection>
          <LandingSection headerText={"Технологии"} sectionName={"techs"}>
            <Techs/>
          </LandingSection>
          <LandingSection headerText={"Студент"} sectionName={"student"}>
            <AboutMe/>
            <Portfolio/>
          </LandingSection>
        </main>
        <Footer/>
      </>
    );
}

export default Main;