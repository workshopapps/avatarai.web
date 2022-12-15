import React, { useState } from "react";
import ArrowDown from "./img/arrowdown.svg";
import "./instruct.css";
import ArrowUp from "./img/ArrowUp.svg";

const InstructionModal = () => {
  const [modal, showModal] = useState(true);
  const showUp = () => {
    showModal((modal) => !modal);
  };
  return (
    <>
      <div className="flex items-center gap-3 mb-5" onClick={showUp}>
        <p className="text-[#000] text-sm md:text-[20px] font-bold">
          Read upload instructions
        </p>
        <img src={`${modal ? ArrowDown : ArrowUp}`} alt="arrow-down" />
      </div>

      <div
        className={`flex items-start justify-around p-5 my-5 gap-10 bg-[#fff] ${
          modal ? "hide" : ""
        }`}
      >
        <div className="text-md my-1.5">
          <p>1. No other people in your photos</p>
          <p className="my-1.5">2. Photos with different expression</p>
          <p className="my-1.5">
            3. Photos in different locations, backgrounds and angles
          </p>
          <p className="my-1.5">4. Only images - 512x512px</p>
          <p className="my-1.5">
            5. Look into the camera and also away
          </p>
          <p className="my-1.5">
            6. If couple, make sure EVERY photo has BOTH of you in it
          </p>
        </div>
        <div className="text-md">
          <p className="my-1.5">1. No duplicate photos</p>
          <p className="my-1.5">2. No black and white photos</p>
          <p className="my-1.5">3. No photo shoots</p>
          <p className="my-1.5">4. Not only selfies</p>
          <p className="my-1.5">5. No children</p>
          <p className="my-1.5">6. No nudes</p>
        </div>
      </div>
    </>
  );
};

export default InstructionModal;
