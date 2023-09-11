import React from "react";

import "./More.css"

function More({ notNeedMore, loadMoreMovie }) {
  return (
    <div className="more">
      <button className={`more__button ${notNeedMore ? "more__button_false" : ""}`} type="button" onClick={loadMoreMovie}>
        Ещё
      </button>
    </div>
  );
}

export default More;