import React from "react";
import "./main.css";
import part1 from './part1.png'
import part2 from './cv.png'
import part3 from './part3.png'
import part4 from './part4.png'
import part5 from './part5.png'
import Group from './Group.png'
import mbb1 from './mbb1.png'
import mbb2 from './mbb2.png'
import mbb3 from './mbb3.png'
import mbb4 from './mbb4.png'
import mbb5 from './mbb5.png'

const Main = () => {
  return (
    <>
      <div className="main-ony">
        <img id="one" src={part1} alt="" />
        <img id="one" src={part2} alt="" />
        <img  src={part3} alt="" />
        <img id="one" src={part4} alt="" />
        <img id="one" src={part5} alt="" />
      </div>
      <div className="group">
        <img src={Group} alt="" />
      </div>
      <div className="main2-ony">
        <img src={mbb1} alt="" />
        <img src={mbb2} alt="" />
        <img src={mbb3} alt="" />
        <img src={mbb4} alt="" />
        <img src={mbb5} alt="" />
      </div>
    </>
  );
};

export default Main;
