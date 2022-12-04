import "./frame-eye.css";

import Frame_1 from "../desktop_4/Frame_1";
import { Link } from "react-router-dom";
import female_icon from "./Female User.svg";
import dog_icon from "./Dog Sit.svg";
import cat_icon from "./Cat Pot.svg";
import Couple from "./Couple-Posing.svg";
import other from "./Decision.svg";
import male_icon from "./User Male.svg";

import prog from "./prog.svg";
import progM from "./prog2.svg";


import one_icon from "./oneicon.png";
import { useState } from "react";


// let personality;


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
    {
      whatGender: "Cat",
      icon: cat_icon,
    },
    {
      whatGender: "Dog",
      icon: dog_icon,
    },
    {
      whatGender: "Couple",
      icon: Couple,
    },
    {
      whatGender: "Others",
      icon: other,
    },
  ]);


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
    // <div className="vnc-main">
    //    <div className="vnc-icon md:mb-20">
    //     <img src={prog} alt="" className="hidden md:block" />
    //     <img src={progM} alt="" className="block md:hidden"  />
    //   </div>
    //   <div className="vnc-text">
    //     <h2 className="text-nunito">Choose your Gender</h2>
    //     <p className="text-nunito">Are you Male or Female</p>
    //   </div>
    //   {/* <form action="" method="post">
    //     <div className="vnc-gender">
    //       {list.map((e, index) => (
    //         <div
    //           onClick={() => {
    //             setToggle(e);
    //             change(e);
    //           }}
    //           key={index}
    //           className={`vnc-selection ${e === toggle && "active"}`}
    //         >
    //           <p>{e.whatGender}</p>
    //           <img className="vnc-icon-image" src={e.icon} alt="" />
    //         </div>
    //       ))}
    //     </div>

    //     <div className="vnc_proceed">
    //       <Link className="link" to="/Dashboard_2">
    //         <input
    //           className="input"
    //           disabled={work}
    //           type="submit"
    //           value="Proceed"
    //         />
    //       </Link>
    //     </div>
    //   </form> */}
    //     <form action="" method="post">
    //     <div className="grid grid-cols-3 gap-1 md:grid-cols-6 ">
    //       {list.map((e, index) => (
    //         <div
    //           onClick={() => {
    //             setToggle(e);
    //             change(e);
    //           }}
    //           key={index}
    //           className={`vnc-selection ${e === toggle && "active"}`}
    //         >
    //           <p>{e.whatGender}</p>
    //           <img className="vnc-icon-image" src={e.icon} alt="" />
    //         </div>
    //       ))}
    //     </div>

    //     <div className="vnc_proceed my-40">
    //       <Link className="link" to="/Dashboard_2">
    //         <input
    //           className="input"
    //           disabled={work}
    //           type="submit"
    //           value="Proceed"
    //         />
    //       </Link>
    //     </div>
    //   </form>
    // </div>

      <div className="vnc-main ">
      <div className="vnc-icon md:mb-20">
        <img src={prog} alt="" className="hidden md:block" />
        <img src={progM} alt="" className="block md:hidden"  />
      </div>
      <div className="vnc-text">
        <h2 className="text-nunito">You are a ...</h2>
      </div>
      <form action="" method="post">
        <div className="grid grid-cols-3 gap-3 md:grid-cols-6 ">
          {list.map((e, index) => (
            <div
              onClick={() => {
                setToggle(e);
                change(e);
                console.log(index)
                

              }}
              key={index}
              className={`vnc-selection ${e === toggle && "active"}`}
            >
              <p>{e.whatGender}</p>
              <img className="vnc-icon-image" src={e.icon} alt="" />
            </div>
          ))}
        </div>

        <div className="vnc_proceed my-40">
          <Link className="link" to="/Dashboard_2">
            <input
              className="input_btn"
              disabled={work}
              type="submit"
              value="Proceed"
              //onClick={localStorage.setItem("personality", JSON.stringify(personality))}
            />
          </Link>
        </div>
      </form>
    </div>
  );
};

export default FrameEye;
