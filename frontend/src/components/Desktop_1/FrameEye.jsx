import "./frame-eye.css";

import Frame_1 from "../desktop_4/Frame_1";
import { Link } from "react-router-dom";
import female_icon from "./female.svg";
import male_icon from "./male.svg";
import one_icon from "./oneicon.png";
import { useState } from "react";

const FrameEye = () => {
  const [list, setList] = useState([
    {
      whatGender: "Male",
      icon: male_icon,
    },
    {
      whatGender: "Female",
      icon: female_icon,
    },
  ]);

  const [toggle, setToggle] = useState(false);

  return (
    <div className="vnc-main">
      <div className="vnc-icon">
        <img src={one_icon} alt="" />
      </div>
      <div className="vnc-text">
        <h2 className="text-nunito">Choose your Gender</h2>
        <p className="text-nunito">Are you Male or Female</p>
      </div>
      <form action="" method="post">
        <div className="vnc-gender">
          {list.map((e) => (
            <div
              onClick={() => setToggle(e)}
              key={e}
              className={`vnc-selection ${e === toggle && "active"}`}
            >
              <p>{e.whatGender}</p>
              <img className="vnc-icon-image" src={e.icon} alt="" />
            </div>
          ))}
        </div>

        <div className="vnc_proceed">
          <input type="submit" value="Proceed" />
        </div>
      </form>
    </div>
  );
};

export default FrameEye;
