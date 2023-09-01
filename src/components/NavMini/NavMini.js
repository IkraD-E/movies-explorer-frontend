import React from "react";

import "./NavMini.css"

function NavMini({tuggleClickNavTab}) {
  return (
    <button className="nav-mini__btn" onClick={tuggleClickNavTab} type="button"></button>
  );
}

export default NavMini;