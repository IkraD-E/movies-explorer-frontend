import React from "react";

import "./Techs.css"

function Techs() {
    return (
      <div className="tech">
        <h3 className="tech__header">7 технологий</h3>
        <p className="tech__text">
          На курсе веб-разработки мы освоили технологии, 
          которые применили в дипломном проекте.
        </p>
        <ul className="tech-list">
          <li className="tech-list__element">
            <p className="tech-list__text">
              HTML
            </p>
          </li>
          <li className="tech-list__element">
            <p className="tech-list__text">
              CSS
            </p>
          </li>
          <li className="tech-list__element">
            <p className="tech-list__text">
              JS
            </p>
          </li>
          <li className="tech-list__element">
            <p className="tech-list__text">
              React
            </p>
          </li>
          <li className="tech-list__element">
            <p className="tech-list__text">
              Git
            </p>
          </li>
          <li className="tech-list__element">
            <p className="tech-list__text">
            Express.js
            </p>
          </li>
          <li className="tech-list__element">
            <p className="tech-list__text">
              mongoDB
            </p>
          </li>
        </ul>
      </div>
     );
}

export default Techs;