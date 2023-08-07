import React from "react";

import "./Techs.css"

function Techs() {
    return (
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
     );
}

export default Techs;