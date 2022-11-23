import "./frame-eye.css";

import Frame_1 from "../desktop_4/Frame_1";
import { Link } from "react-router-dom";
import SearchComponent from "../DashboardSearchComponent/SearchComponent";
import female_icon from "./female.svg";
import male_icon from "./male.svg";
import one_icon from "./oneicon.png";
import { useState } from "react";


const FrameEye = () => {
  const [toggle, setToggle] = useState(false);
  const click = (index) => {
    if (toggle === index) {
    }
  };

  return (

    <div className="vnc-main">
      <div className="vnc-icon">
        <img src={one_icon} alt="" />

      </div>
      <div className="vnc-text">
        <h2 className="text-nunito">Choose your Gender</h2>
        <p className="text-nunito">Are you Male or Female</p>
      </div>
      <div className="vnc-gender">
        <div className="vnc-male">
          <p>Male</p>
          <img src={male_icon} alt="" />
        </div>
        <div className="vnc-female">
          <p>Female</p>
          <img src={female_icon} alt="" />
        </div>
      </div>

      <div className="vnc_proceed">
        <Link to="/">Proceed</Link>
      </div>
    </div>
  );
};

export default FrameEye;
