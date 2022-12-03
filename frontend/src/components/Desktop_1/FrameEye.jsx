import "./frame-eye.css";

import Frame_1 from "../desktop_4/Frame_1";
import { Link } from "react-router-dom";
import female_icon from "./female.svg";
import male_icon from "./male.svg";
import one_icon from "./oneicon.png";
import { useState } from "react";


let personality;


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

  // let personality = input.password
  //   let item ={first_name,last_name,email,password}
  //   // console.warn("item",item)
  //   localStorage.setItem("opt_mail", JSON.stringify(item.email))

  const [toggle, setToggle] = useState(false);
  const [work, setWork] = useState(true);

  const change = (e) => {
    if (e) {
      setWork((work) => {
        false;
      });
    } else {
      setWork((work) => {
        true;
      });
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
      <form action="" method="post">
        <div className="vnc-gender">
          {list.map((e, index) => (
            <div
              onClick={() => {
                setToggle(e);
                change(e);
                console.log(index)
                if(index === 0) {
                  personality = "male";
                } else {
                  personality = "female";
                }

              }}
              key={index}
              className={`vnc-selection ${e === toggle && "active"}`}
            >
              <p>{e.whatGender}</p>
              <img className="vnc-icon-image" src={e.icon} alt="" />
            </div>
          ))}
        </div>

        <div className="vnc_proceed">
          <Link className="link" to="/Dashboard_2">
            <input
              className="input"
              disabled={work}
              type="submit"
              value="Proceed"
              onClick={localStorage.setItem("personality", JSON.stringify(personality))}
            />
          </Link>
        </div>
      </form>
    </div>
  );
};

export default FrameEye;
