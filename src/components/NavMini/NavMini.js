import React from "react";

import "./NavMini.css"

function NavMini({tuggleClickNavTab}) {
  return (
    <div className="nav-mini">
      <button className="nav-mini__btn" onClick={tuggleClickNavTab} type="button"></button>
    </div>
  );
}

export default NavMini;