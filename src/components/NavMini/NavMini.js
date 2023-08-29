import React from "react";

import "./NavMini.css"

function NavMini({tuggleClickNavTab}) {
  return (
    <button className="nav-mini__btn" onClick={tuggleClickNavTab}></button>
  );
}

export default NavMini;