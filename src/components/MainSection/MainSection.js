import React from "react";

import "./MainSection.css"

function MainSection({ children, headerText, sectionName }) {
    return (
      <section className={`section ${sectionName}`} id="about">
        <div className="section__container-header">
          <h2 className="section__header">
            {headerText}
          </h2>
        </div>
        {children}
      </section>
    );
}

export default MainSection;