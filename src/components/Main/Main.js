import React from "react";
import "./Main.css"

import Footer from "../Footer/Footer";
import AboutProject from "../AboutProject/AboutProject";
import MainSection from "../MainSection/MainSection";
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
          <MainSection headerText={"О проекте"} sectionName={"about"}>
            <AboutProject/>
          </MainSection>
          <MainSection headerText={"Технологии"} sectionName={"techs"}>
            <Techs/>
          </MainSection>
          <MainSection headerText={"Студент"} sectionName={"student"}>
            <AboutMe/>
            <Portfolio/>
          </MainSection>
        </main>
        <Footer/>
      </>
    );
}

export default Main;