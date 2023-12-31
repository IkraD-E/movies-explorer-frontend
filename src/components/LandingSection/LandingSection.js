import React from "react";

import "./LandingSection.css"

function LandingSection({ children, headerText, sectionName }) {
    return (
      <section className={`section ${sectionName}`} id={`${sectionName}`}>
        <div className="section__container-header">
          <h2 className="section__header">
            {headerText}
          </h2>
        </div>
        {children}
      </section>
    );
}

export default LandingSection;