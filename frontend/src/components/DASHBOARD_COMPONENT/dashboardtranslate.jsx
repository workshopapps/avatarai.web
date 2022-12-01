import React from "react";
import "./dashboardcomp.css";
import Arrow from "./img/arrowdown.svg";

function Dashboardtranslate() {
  return (
    <div className="vic_dash_translate ">
      <p>English</p>
      <img src={Arrow} onClick="" />
      {/* translation languages come here and will be linked to the onClick event above  */}
    </div>
  );
}

export default Dashboardtranslate;
