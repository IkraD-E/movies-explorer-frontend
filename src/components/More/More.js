import React from "react";

import "./More.css"

function More({ path, notNeedMore }) {
  return (
    <div className="more">
      <button className={`more__button ${notNeedMore ? "more__button_false" : ""}`} type="button">
        Ещё
      </button>
    </div>
  );
}

export default More;